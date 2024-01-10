import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { User } from './domain/user.entity';
import { Auth } from '@libs/auth';

@Injectable()
export class UserService {
  @Inject()
  private readonly repository: UserRepository;

  async getById(id: string): Promise<User> {
    return await this.repository.getById(id);
  }

  async create(): Promise<User> {
    let uid: string;
    try {
      const email = `user-${Date.now()}@mshp.io`;
      uid = await Auth.createUserWithEmailAndPassword(email, 'password');
      const user = await this.repository.create({
        firebaseAuthId: uid,
        firstName: 'John',
        lastName: 'Doe',
        email,
        status: 'active',
      });
      return user;
    } catch (error) {
      // Clean-up (TODO: move to event queue?)
      if (uid) {
        await Auth.deleteAuthUserByUID(uid);
        await this.repository.delete(uid);
      }
      throw error;
    }
  }
}

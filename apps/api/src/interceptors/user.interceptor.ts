import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from '@core/modules';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  constructor(private userService: UserService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const uid = request.auth?.uid;

    if (uid) {
      const user = await this.userService.getUserById(uid);
      request.user = user;
    }

    return next.handle().pipe(tap(() => {}));
  }
}

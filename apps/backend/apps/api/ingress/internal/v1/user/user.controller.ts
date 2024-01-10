import { Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { User, UserService } from '@modules/user';
import { RequestUser } from '@api/decorators/request-user.decorator';
import logger from '@libs/logger';

@Controller('v1/user')
export class InternalApiV1UserController {
  @Inject()
  private readonly userService: UserService;

  @Post()
  async createUser(): Promise<User> {
    return await this.userService.create();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<User> {
    logger.log('The id is: ', id);
    return await this.userService.getById(id);
  }
}

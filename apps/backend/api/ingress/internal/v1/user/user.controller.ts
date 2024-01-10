import { Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { User, UserService } from '@modules/user';
import logger from '@libs/logger';
import { ApiResponse } from '@nestjs/swagger';

@Controller('v1/user')
export class InternalApiV1UserController {
  @Inject()
  private readonly userService: UserService;

  @Post()
  async createUser(): Promise<User> {
    return await this.userService.create();
  }

  @Get(':id')
  @ApiResponse({
    type: User,
    description: 'Get a user by id',
  })
  async getById(@Param('id') id: string): Promise<User> {
    logger.log('The id is: ', id);
    return await this.userService.getById(id);
  }
}

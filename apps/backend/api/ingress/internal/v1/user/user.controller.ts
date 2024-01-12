import { Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { User, UserService } from '@modules/user';
import logger from '@libs/logger';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { api } from '@mothership/nest';

@Controller('v1/user')
@ApiTags('user')
export class InternalApiV1UserController {
  @Inject()
  private readonly userService: UserService;

  @api.Post('/', {
    description: 'Create a user',
    operationId: 'createUser',
    responseType: User,
  })
  async createUser(): Promise<User> {
    return await this.userService.create();
  }

  @api.Get('/:id', {
    description: 'Get a user by id',
    operationId: 'getById',
    responseType: User,
  })
  async getById(@Param('id') id: string): Promise<User> {
    return await this.userService.getById(id);
  }

  @api.Delete('/:id', {
    description: 'Delete a user by id',
    operationId: 'deleteById',
    responseType: User,
  })
  async deleteById(@Param('id') id: string): Promise<User> {
    return await this.userService.deleteById(id);
  }
}

import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { api } from '@mothership/nest';
import { User, UserService, logger } from '@core/backend';

@Controller('v1/user')
@ApiTags('user')
export class InternalApiV1UserController {
  @Inject()
  private readonly userService: UserService;

  // @api.Post('/', {
  //   description: 'Create a user',
  //   operationId: 'createUser',
  //   responseType: User,
  // })
  // async createUser(): Promise<User> {
  //   return await this.userService.create();
  // }

  // @api.Get('/test', {
  //   description: 'Get all users',
  //   operationId: 'getAll',
  //   responseType: String,
  // })
  @Get('/test')
  getAll(): string {
    console.log('I am here?');
    return 'Hello';
  }

  // @api.Get('/:id', {
  //   description: 'Get a user by id',
  //   operationId: 'getById',
  //   responseType: User,
  // })
  // async getById(@Param('id') id: string): Promise<User> {
  //   logger.info('Getting user by id', id);
  //   return (await Promise.resolve(id)) as any;
  //   return await this.userService.getById(id);
  // }

  // @api.Delete('/:id', {
  //   description: 'Delete a user by id',
  //   operationId: 'deleteById',
  //   responseType: User,
  // })
  // async deleteById(@Param('id') id: string): Promise<User> {
  //   return await this.userService.deleteById(id);
  // }
}

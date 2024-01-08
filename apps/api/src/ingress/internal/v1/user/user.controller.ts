import { Controller, Get, Inject, Param } from '@nestjs/common';
import { User, UserService } from '@core/modules';
import { RequestUser } from 'src/decorators/request-user.decorator';

@Controller('v1/user')
export class InternalApiV1UserController {
  @Inject()
  private readonly userService: UserService;

  @Get(':id')
  async getUserById(
    @Param('id') id: string,
    @RequestUser() rqUser: User | null,
  ): Promise<User> {
    console.log('The request user is: ', rqUser);
    return await this.userService.getUserById(id);
  }
}

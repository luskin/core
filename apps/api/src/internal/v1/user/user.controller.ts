import { Controller, Get, Inject, Param } from '@nestjs/common';
import { User, UserService } from '@core/modules';

@Controller('v1/user')
export class InternalApiV1UserController {
  @Inject()
  private readonly userService: UserService;

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return await this.userService.getUserById(id);
  }
}

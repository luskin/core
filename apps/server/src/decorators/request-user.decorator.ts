import { createParamDecorator, ExecutionContext } from "@nestjs/common"
import { User } from "../modules/user"

export const RequestUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): User | null => {
    const request = ctx.switchToHttp().getRequest()
    return request.user
  }
)

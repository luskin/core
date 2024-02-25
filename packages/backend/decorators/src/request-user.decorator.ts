import { User } from "@backend/modules"
import { createParamDecorator, ExecutionContext } from "@nestjs/common"

export const RequestUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): User | null => {
    const request = ctx.switchToHttp().getRequest()
    return request.user
  }
)

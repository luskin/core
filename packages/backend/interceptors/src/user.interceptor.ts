import { config } from "@backend/config"
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common"
import { Observable } from "rxjs"
import { tap } from "rxjs/operators"

// This is a fake service, replace it with a real one
interface UserService {
  getById(uid: string): Promise<string>
}

@Injectable()
export class UserInterceptor implements NestInterceptor {
  constructor(private userService: UserService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest()
    const uid = request.auth?.uid

    if (uid && !config.environment.isDevelopment) {
      const user = await this.userService.getById(uid)
      request.user = user
    }

    return next.handle().pipe(tap(() => {}))
  }
}

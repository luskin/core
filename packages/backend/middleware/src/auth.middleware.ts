import { config } from "@backend/config"
import { auth } from "@backend/libs"
import { Injectable, NestMiddleware } from "@nestjs/common"
import { Request, Response, NextFunction } from "express"

interface AuthMiddlewareRequest extends Request {
  auth?: {
    uid: string
  } | null
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: AuthMiddlewareRequest, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split("Bearer ")[1]

    // TODO - make this selectable via config
    if (config.environment.isDevelopment) {
      req["auth"] = {
        uid: "local",
      }
      return next()
    }

    if (!token) {
      // TODO - return MSHP Unauthorized exception
      return res.status(401).send("Unauthorized")
    }

    try {
      const decodedToken = await auth.verifyToken(token)
      if (!decodedToken) {
        // TODO - return MSHP Unauthorized exception
        return res.status(401).send("Unauthorized")
      }
      req["auth"] = {
        uid: decodedToken,
      }
      next()
    } catch (error) {
      // TODO - return MSHP Unauthorized exception
      return res.status(401).send("Unauthorized")
    }
  }
}

import { Auth } from '@core/libs';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split('Bearer ')[1];

    if (!token) {
      // TODO - return MSHP Unauthorized exception
      return res.status(401).send('Unauthorized');
    }

    try {
      const decodedToken = await Auth.decodeAuthorizationTokenToUID(token);
      req['identity'] = {
        id: decodedToken,
      };
      next();
    } catch (error) {
      // TODO - return MSHP Unauthorized exception
      return res.status(401).send('Unauthorized');
    }
  }
}

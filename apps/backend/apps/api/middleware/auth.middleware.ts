import { Auth } from '@libs/auth';
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
      const decodedToken = await Auth.verifyToken(token);
      if (!decodedToken) {
        // TODO - return MSHP Unauthorized exception
        return res.status(401).send('Unauthorized');
      }
      req['auth'] = {
        uid: decodedToken,
      };
      next();
    } catch (error) {
      // TODO - return MSHP Unauthorized exception
      return res.status(401).send('Unauthorized');
    }
  }
}

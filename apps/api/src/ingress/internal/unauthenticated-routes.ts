import { RequestMethod } from '@nestjs/common';
import { RouteInfo } from '@nestjs/common/interfaces';

export const unauthenticatedRoutes: Array<RouteInfo> = [
  {
    path: 'v1/user',
    method: RequestMethod.POST,
  },
];

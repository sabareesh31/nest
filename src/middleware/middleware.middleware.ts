import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class MiddlewareMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    next();
  }
}

import { Request, Response, NextFunction } from 'express';
export function middleware(req:Request,res:Response,next:NextFunction){
  console.log("conneted");
  next();
}
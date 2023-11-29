import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { request } from 'http';
import { Observable } from 'rxjs';
import {Role} from '../roles/roles.decorator'
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard implements CanActivate {
constructor (private reflector:Reflector){}
  canActivate(context: ExecutionContext): boolean  {
    const roles=this.reflector.get(Role,context.getHandler());
    if(!roles){
      return true
    }
    const req=context.switchToHttp().getResponse();
const user=req.user
return matchRoles(roles,user.roles)
// throw new Error('Method not implemented.');
  }

//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const req=context.switchToHttp().getResponse();

//     return validateRequest(req);
//   }
// }

// function validateRequest(req: any): boolean | Promise<boolean> | Observable<boolean> {
//   throw new Error('Function not implemented.');
// }



}
function matchRoles(roles: string[], roles1: any): boolean {
  throw new Error('Function not implemented.');
}


import { SetMetadata } from '@nestjs/common';
import {Reflector} from '@nestjs/core'

export const Role=Reflector.createDecorator<string[]>();
export const Roles = (...args: string[]) => SetMetadata('roles', args);

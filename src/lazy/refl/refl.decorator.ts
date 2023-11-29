import { SetMetadata } from '@nestjs/common';

export const Refl = (...args: string[]) => SetMetadata('refl', args);

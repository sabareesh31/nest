import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv'
import * as fs from 'fs';
import * as path from 'path';
import { EnvConfig } from './config.interfaces';
// import {EnvConfig} from './config.interfacesn'

@Injectable()
export class ConfigService {
    private readonly envConfig: EnvConfig

    constructor() {
        const options = { folder: './config' }

        const filePath = `${process.env.NODE_ENV || 'development'}.env`;
        const envFile = path.resolve(__dirname, './', options.folder, filePath);
        // this.envConfig = dotenv.parse(fs.readFileSync(envFile));
    }
    // get(key: string): string {
    //     // return this.envConfig[key]
    // }
}



import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { Connection } from '../connection/connection'

@Module({
  controllers: [CatController],
  providers: [
    CatService,
    {
      provide: 'CONNECTION',
      useValue: Connection
    },
    // {
    //     provide: 'ASYNC_CONNECTION',
    //     useFactory: async () => {
    //       // const connection = await createConnection(CatService);
    //       // return connection
    //     }
    //   }
  ], // easy syntex
  // useClass function called 
  // providers:[ // complex syntex 
  //   {
  //     provide:CatService,
  //     useClass:CatService
  //   }
  // ]




  // providers: [
  // }]

})
export class CatModule { }




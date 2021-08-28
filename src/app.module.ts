import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExportExcelModule } from './exportExcel/exportExcel.module';
import {ConfigModule} from '@nestjs/config';
@Module({
  imports: [ExportExcelModule, ConfigModule.forRoot({
    envFilePath: process.env.NODE_ENV ? './src/env/.env' : '',
    isGlobal: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

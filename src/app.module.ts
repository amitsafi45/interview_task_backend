import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { envValidate } from './utils/envValidator';
import { DatabaseModule } from './modules/database.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath:'.env',
    isGlobal: true,
    validate:envValidate
  }),DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule{}


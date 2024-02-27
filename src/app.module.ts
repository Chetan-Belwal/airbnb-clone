import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { systemConfig } from './environment/configs/system';
import { databaseConfig } from './environment/configs/database';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true,
    load:[systemConfig,databaseConfig]
  }), DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { DatabaseConfigService } from './database-config.service';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forRootAsync({
    useClass:DatabaseConfigService
  })],
  providers: [DatabaseConfigService]
})
export class DatabaseModule {}

import { Injectable } from '@nestjs/common';
import {
  SequelizeOptionsFactory,
  SequelizeModuleOptions,
} from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfigService implements SequelizeOptionsFactory {
  connection: any;
  constructor(private configService: ConfigService) {}
  public createSequelizeOptions(): SequelizeModuleOptions {
    const dbConfig = this.configService.get('databases');
    return {
      dialect: 'mysql',
      host: dbConfig.host,
      port: dbConfig.port,
      username: dbConfig.username,
      password: dbConfig.password,
      database: dbConfig.name,
      models: [],
    };
  }
}

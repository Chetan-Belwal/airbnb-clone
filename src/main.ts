import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SystemConfig } from './environment/environment.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config =  app.get(ConfigService);
  console.log(config.get('databases'))
  await app.listen(config.get<SystemConfig>('system').port);
}
bootstrap();

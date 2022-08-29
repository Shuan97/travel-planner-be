import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
dotenv.config();

async function bootstrap() {
  const logger = new Logger('Main');

  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.setGlobalPrefix('api');

  await app.listen(3200);

  logger.log(
    `\x1b[35mApplication is running on: \x1b[36m${await app.getUrl()}\x1b[0m`,
  );
  logger.log(
    `\x1b[35mCurrent build: \x1b[36m[${config.get('NODE_ENV')}]\x1b[0m`,
  );
}
bootstrap();

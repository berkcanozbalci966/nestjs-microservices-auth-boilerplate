import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { RmqService } from '@app/common';
import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const configService = app.get<ConfigService>(ConfigService);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('AUTH', true));

  await app.listen(configService.get('PORT'));
}
bootstrap();

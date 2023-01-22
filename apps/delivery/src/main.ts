import { NestFactory } from '@nestjs/core';
import { RmqService } from '@app/common';
import { DeliveryModule } from './delivery.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(DeliveryModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('DELIVERY'));

  await app.startAllMicroservices();
}
bootstrap();

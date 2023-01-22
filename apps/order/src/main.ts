import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { OrderModule } from './order.module';

async function bootstrap() {
  const app = await NestFactory.create(OrderModule);
  const configService = app.get(ConfigService);
  console.log(configService.get('PORT'));
  await app.listen(3003);
}
bootstrap();

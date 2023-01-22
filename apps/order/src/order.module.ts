import { RmqModule, SERVICE_NAMES } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/order/.env',
    }),
    RmqModule.register({ name: SERVICE_NAMES.DELIVERY }),
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}

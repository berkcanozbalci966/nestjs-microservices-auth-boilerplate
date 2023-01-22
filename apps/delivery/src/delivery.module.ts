import { Module } from '@nestjs/common';
import { RmqModule } from '@app/common';
import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    RmqModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/auth/.env',
      cache: true,
    }),
  ],
  controllers: [DeliveryController],
  providers: [DeliveryService],
})
export class DeliveryModule {}

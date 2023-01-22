import { RmqService } from '@app/common';
import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { DeliveryService } from './delivery.service';

@Controller()
export class DeliveryController {
  constructor(
    private readonly deliveryService: DeliveryService,
    private readonly rmqService: RmqService,
  ) {}

  getHello(): string {
    return this.deliveryService.getHello();
  }

  @EventPattern('order_created')
  handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    this.deliveryService.sendCargo(data);
    this.rmqService.ack(context);
  }
}

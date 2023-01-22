import { SERVICE_NAMES } from '@app/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrderService {
  constructor(
    @Inject(SERVICE_NAMES.DELIVERY) private deliveryClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createOrder(): string {
    this.deliveryClient.emit('order_created', true);
    return 'order created';
  }
}

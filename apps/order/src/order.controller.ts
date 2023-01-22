import { Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getHello(): string {
    return this.orderService.getHello();
  }

  @Post()
  createOrder(): string {
    return this.orderService.createOrder();
  }
}

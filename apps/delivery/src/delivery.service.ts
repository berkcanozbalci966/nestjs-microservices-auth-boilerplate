import { Injectable } from '@nestjs/common';

@Injectable()
export class DeliveryService {
  getHello(): string {
    return 'Hello World!';
  }

  sendCargo(data: any) {
    console.log('Cargo gone !!!!', data);
  }
}

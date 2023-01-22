import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import * as Joi from 'joi';
import { RmqModule } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/auth/.env',
      cache: true,
      validationSchema: Joi.object({
        JWT_EXPIRATION: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
      }),
    }),
    RmqModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}

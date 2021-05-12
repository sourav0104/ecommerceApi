import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { UserEntity } from 'src/auth/entities/user.entity';
import { Order } from 'src/order/entities/order.entity';
import { UserService } from 'src/auth/user/user.service';
import { OrderService } from 'src/order/order.service';

@Module({
  imports:[TypeOrmModule.forFeature([Payment,Order,UserEntity])],
  controllers: [PaymentController],
  providers: [PaymentService,OrderService,UserService]
})
export class PaymentModule {}

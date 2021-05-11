import { Module } from '@nestjs/common';
import { OrderdetailsService } from './orderdetails.service';
import { OrderdetailsController } from './orderdetails.controller';
import { Orderdetail } from './entities/orderdetail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/order/entities/order.entity';
import { OrderService } from 'src/order/order.service';
import { Product } from 'src/product/entities/product.entity';
import { ProductService } from 'src/product/product.service';

@Module({
  imports:[TypeOrmModule.forFeature([Orderdetail,Order,Product])],
  controllers: [OrderdetailsController],
  providers: [OrderdetailsService,OrderService,ProductService]
})
export class OrderdetailsModule {}

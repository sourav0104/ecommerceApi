import { Module } from "@nestjs/common";
import { OrderDetailService } from "./order-detail.service";
import { OrderDetailController } from "./order-detail.controller";
import { OrderDetail } from "./entities/order-detail.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "src/order/entities/order.entity";
import { OrderService } from "src/order/order.service";

@Module({
    imports: [TypeOrmModule.forFeature([OrderDetail])],
    controllers: [OrderDetailController],
    providers: [OrderDetailService],
})
export class OrderDetailModule {}

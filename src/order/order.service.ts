import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/auth/user/user.service';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private orderRepository:Repository<Order>,
    private userService:UserService
  ){}
  async create(userId:string,createOrderDto: CreateOrderDto) {
    const user= await this.userService.findById(userId)
    
    return this.orderRepository.save({
      orderAmount: createOrderDto.amount,
      orderStatus: createOrderDto.status,
      userId:user,
    });
  }


  
  findAll(userId: string) {
    return this.orderRepository.find({where:{userId: userId }}).then((data) => {
      if (data.length==0) throw new NotFoundException();
      return data;
    });
  }

 
  findOne(userId: string, orderId: number) {
    return this.orderRepository.findOne({
      where: { userId: userId, orderId: orderId }
    }).then((data) => {
      if (!data) throw new NotFoundException();
      return data;
    });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderRepository.update(
      {orderId:id},
      {
        orderAmount:updateOrderDto.amount,
        orderStatus:updateOrderDto.status,
      }
    );
  }


  remove(id: number) {
    return this.orderRepository.delete({
      orderId:id
    });
  }
}

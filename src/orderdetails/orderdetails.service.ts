import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/auth/user/user.service';
import { OrderService } from 'src/order/order.service';
import { Repository } from 'typeorm';
import { CreateOrderdetailDto } from './dto/create-orderdetail.dto';
import { UpdateOrderdetailDto } from './dto/update-orderdetail.dto';
import { Orderdetail } from './entities/orderdetail.entity';
import {getManager} from "typeorm";
import { Order } from '../order/entities/order.entity';
import { ProductService } from 'src/product/product.service';


@Injectable()
export class OrderdetailsService {
  orderRepository: any;
  constructor(
    @InjectRepository(Orderdetail) private orderDetailRepository:Repository<Orderdetail>,
    private userService:UserService,private orderService:OrderService,
    // private productService:ProductService,
    
  ){}

async create(userId:string,orderId:number,createOrderdetailDto: CreateOrderdetailDto) {
    const user= await this.userService.findById(userId)
    const order= await this.orderService.findOne(orderId)
    
    // const product = await this.productService.findOne(productId)
    // const entityManager = getManager();
    // const order=await entityManager.findOne()
    // const repository = connection.getRepository()
    // const order=await this.orderDetailRepository.find(orderId)


    return this.orderDetailRepository.save({
      orderName:createOrderdetailDto.name,
      orderQuntity:createOrderdetailDto.qty,
      userId:user,
      orderId:order,
      

    });
  }

  async findAll(userId:string) {
    const user=await this.userService.findById(userId)
    return this.orderDetailRepository.find({where:{userId:user}});
  }

  // findAll() {
  //   return this.orderDetailRepository.find({relations:['userId']});
  // }

  findOne(id: number) {
    return this.orderDetailRepository.findOne(id)
    .then((data)=>{
      if(!data) throw new NotFoundException();
      return data;
    })
    ;
  }

  update(id: number, updateOrderdetailDto: UpdateOrderdetailDto) {
    return this.orderDetailRepository.update(
      {orderDetailId:id},
      {
        orderName:updateOrderdetailDto.name,
        orderQuntity:updateOrderdetailDto.qty,
      }
    );
  }

  remove(id: number) {
    return this.orderDetailRepository.delete({
      orderDetailId:id
    });
  }
}

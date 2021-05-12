import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from 'src/auth/user/user.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './entities/payment.entity';
import { OrderService } from 'src/order/order.service';

@Injectable()
export class PaymentService {
  
  constructor(
  @InjectRepository(Payment) private paymentRepository:Repository<Payment>,
   private userService:UserService,private orderService: OrderService
){}

 async create(userId:string,orderId:number,createPaymentDto: CreatePaymentDto) {
    const user= await this.userService.findById(userId)
    const order = await this.orderService.findOne(userId, orderId)
    return this.paymentRepository.save({
      paymentAmount: createPaymentDto.payamount,
      paymentStatus: createPaymentDto.paystatus,
      userId: user,
      orderId:order,
    });
  }

  
  findAll(userId: string, orderId: number) {
    return this.paymentRepository.find({
      where: { orderId: orderId, user:userId }
    }).then((data) => {
      if (data.length == 0) throw new NotFoundException();
      return data;
    });
  }


  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}

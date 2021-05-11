import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from 'src/auth/user/user.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Payment } from './entities/payment.entity';

@Injectable()
export class PaymentService {
  constructor(
  @InjectRepository(Payment) private paymentRepository:Repository<Payment>,
   private userService:UserService
){}

 async create(userId:string,createPaymentDto: CreatePaymentDto) {
    const user= await this.userService.findById(userId)
    return this.paymentRepository.save({
      paymentAmount: createPaymentDto.payamount,
      paymentStatus: createPaymentDto.paystatus,
      userId: user,
    });
  }

  async findAll(userId:string) {
    const user=await this.userService.findById(userId)
    return this.paymentRepository.find({where:{userId:user}});
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

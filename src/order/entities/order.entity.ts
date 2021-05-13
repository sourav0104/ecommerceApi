import { UseGuards } from '@nestjs/common';
import { UserEntity } from 'src/auth/entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { Orderdetail } from 'src/orderdetails/entities/orderdetail.entity';
import { Payment } from 'src/payment/entities/payment.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, OneToOne } from 'typeorm';
// import {Orderdetails} from 'src/orderdetails/orderdetails.service';

@Entity({name:"orders"})
@UseGuards(JwtAuthGuard)
@UseGuards(JwtStrategy)
export class Order {
    @PrimaryGeneratedColumn()
    orderId:number;

    @Column({default:0,type:'decimal',nullable:false})
    orderAmount:number;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    orderDate: Date;

    @Column({ type: 'datetime',nullable:true })
    orderShippingDate: Date;

    @Column({default:'pending',nullable:false})
    orderStatus:string;

    @Column("simple-array")
    productData:string[];

  
    @OneToMany(() => Orderdetail, (orderdetail) => orderdetail.orderId)
    orderdetail: Orderdetail[];

    @ManyToOne(()=>UserEntity,(user)=>user.userId)
    @JoinColumn({name:'userId'})
    userId:UserEntity;

    @OneToOne(() => Payment, (payment) => payment.paymentId)
    payment: Payment[];

    
}

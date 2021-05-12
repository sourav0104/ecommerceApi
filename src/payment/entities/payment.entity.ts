import { UseGuards } from '@nestjs/common';
import { UserEntity } from 'src/auth/entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { Order } from 'src/order/entities/order.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, JoinTable } from 'typeorm';

@Entity({name:'payment'})
@UseGuards(JwtAuthGuard)
@UseGuards(JwtStrategy)
export class Payment {
    @PrimaryGeneratedColumn()
    paymentId:number;

    @Column({default:'finished',nullable:false})
    paymentStatus:string;

    @Column({default:0,nullable:false})
    paymentAmount:number;

    @Column({default:"cash",nullable:false})
    paymentMethod:string;

    @ManyToOne(()=>UserEntity,(user)=>user.userId)
    @JoinColumn({name:'userId'})
    userId:UserEntity;

    @ManyToOne((type) => Order, (order) => order.orderId)
    @JoinColumn({name:"orderId"})
    orderId: Order;

}

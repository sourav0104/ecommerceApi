import { UseGuards } from '@nestjs/common';
import { UserEntity } from 'src/auth/entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { Order } from 'src/order/entities/order.entity';
// import { OrderService } from 'src/order/order.service';
import { Product } from 'src/product/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, JoinTable, OneToMany } from 'typeorm';

@Entity({name:'orderdetails'})
@UseGuards(JwtAuthGuard)
@UseGuards(JwtStrategy)

export class Orderdetail {
    @PrimaryGeneratedColumn()
    orderDetailId:number;

    @Column({})
    orderQuntity:number;

    @Column()
    orderName:string

    @ManyToOne(()=>Order,(order)=>order.orderId)
    @JoinColumn({name:"orderId"})
    @JoinTable()
    orderId:Order

    @ManyToOne(()=>Product,(product)=>product.productId)
    @JoinColumn({name:"productId"})
    @JoinTable()
    productId:Product
 
    @ManyToOne(()=>UserEntity,(user)=>user.userId)
    @JoinColumn({name:'userId'})
    userId:UserEntity;

   

}

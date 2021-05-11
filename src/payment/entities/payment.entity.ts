import { UseGuards } from '@nestjs/common';
import { UserEntity } from 'src/auth/entities/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, JoinTable } from 'typeorm';

@Entity({name:'payment'})
@UseGuards(JwtAuthGuard)
@UseGuards(JwtStrategy)
export class Payment {
    @PrimaryGeneratedColumn()
    paymentId:number;

    @Column({default:'false',nullable:false})
    paymentStatus:string;

    @Column({nullable:false})
    paymentAmount:number;

    @Column({default:"credit-card",nullable:false})
    paymentMethod:string;

    @ManyToOne(()=>UserEntity,(user)=>user.userId)
    @JoinColumn({name:'userId'})
    userId:UserEntity;

}

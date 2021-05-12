import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from "class-validator";

export class CreateOrderdetailDto {
    @ApiProperty()
    orderDetailId:number;

    @ApiProperty()
    @IsNotEmpty()
    name:string;

    @ApiProperty()
    qty:number;

    @ApiProperty()
    @IsNotEmpty()
    orderId:number;

    @ApiProperty()
    @IsNotEmpty()
    productId:number;

    @ApiProperty()
    userId:string;
}

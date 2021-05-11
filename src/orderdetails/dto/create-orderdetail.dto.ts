import { ApiProperty } from '@nestjs/swagger';
export class CreateOrderdetailDto {
    @ApiProperty()
    orderDetailId:number;

    @ApiProperty()
    name:string;

    @ApiProperty()
    qty:number;

    @ApiProperty()
    orderId:number;

    @ApiProperty()
    productId:number;

    @ApiProperty()
    userId:string;
}

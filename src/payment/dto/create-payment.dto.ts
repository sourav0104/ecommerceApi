import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from "class-validator";

export class CreatePaymentDto {
  
    @ApiProperty()
    @IsNotEmpty()
    orderId:number;

    @ApiProperty()
    paystatus:string;

    @ApiProperty()
    payamount:number;

    @ApiProperty()
    paymethod?:string

    @ApiProperty()
    user:string;
}

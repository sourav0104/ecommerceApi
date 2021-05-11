import { ApiProperty } from '@nestjs/swagger';
export class CreatePaymentDto {
    @ApiProperty()
    paymentId:number;

    @ApiProperty()
    paystatus:string;

    @ApiProperty()
    payamount:number;

    @ApiProperty()
    paymethod?:string

    @ApiProperty()
    user:string;
}

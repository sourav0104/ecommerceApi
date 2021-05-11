import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {


    @ApiProperty({required:false})
    odate?:Date;

    @ApiProperty({required:false})
    sdate?:Date;

    @ApiProperty()
    amount:number;

    @ApiProperty()
    status:string;

    @ApiProperty()
    user:string;
    
    
}


import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from "class-validator";

export class CreateOrderDto {


    @ApiProperty({required:false})
    odate?:Date;

    @ApiProperty({required:false})
    sdate?:Date;

    @ApiProperty()
    @IsNotEmpty()
    amount:number;

    @ApiProperty()
    @IsNotEmpty()
    status:string;

    @ApiProperty()
    user:string;
    
    
}


import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateOrderDetailDto } from "./create-order-detail.dto";

export class UpdateOrderDetailDto extends PartialType(CreateOrderDetailDto) {
    @ApiProperty()
    orderAmount: number;

    @ApiProperty()
    orderQty: number;
}

import { Controller, Get, Post, Body, Patch, Param, Delete,Request,Req, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiTags, ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.guard';


@ApiTags('order')
@Controller('order')
@UseGuards(JwtAuthGuard)
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

    @Post()
    create(@Request() req:any,@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(req.user.userId,createOrderDto);
  }

  @Get()
  findAll(@Request() req:any) {
    return this.orderService.findAll(req.user.userId);
  }

  @ApiNotFoundResponse({ description: 'No data is found for the specified ID' })
  @ApiOkResponse({ description: 'Order Data found' })
  @Get(':id')
  findOne(@Request() req:any,@Param('id') id: string) {
    return this.orderService.findOne(req.user.userId,+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }
}

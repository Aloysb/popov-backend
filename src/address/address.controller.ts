import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { NotFoundInterceptorInterceptor } from '../interceptors/not-found-interceptor.interceptor';
import { AddressService } from './address.service';
import { CreateaddressDto } from './dto/create-address.dto';
import { UpdateaddressDto } from './dto/update-address.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  create(@Body() createaddressDto: CreateaddressDto) {
    return this.addressService.create(createaddressDto);
  }

  @Get()
  findAll() {
    return this.addressService.findAll();
  }

  @Get(':id')
  @UseInterceptors(NotFoundInterceptorInterceptor)
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.addressService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateaddressDto: UpdateaddressDto,
  ) {
    updateaddressDto.updatedAt = new Date();
    return this.addressService.update(+id, updateaddressDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    return this.addressService.remove(+id);
  }
}

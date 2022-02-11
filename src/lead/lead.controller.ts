import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ParseIntPipe,
} from '@nestjs/common';
import { Lead } from '@prisma/client';
import { NotFoundInterceptorInterceptor } from 'src/interceptors/not-found-interceptor.interceptor';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateCreateDto } from './dto/update-lead.dto';
import { LeadService } from './lead.service';

@Controller('lead')
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  @Post()
  create(@Body() createLeadDto: CreateLeadDto): Promise<Lead> {
    return this.leadService.create(createLeadDto);
  }

  @Get()
  async findAll() {
    return await this.leadService.findAll();
  }

  @Get(':id')
  @UseInterceptors(NotFoundInterceptorInterceptor)
  async findOneById(@Param('id', ParseIntPipe) id: number): Promise<Lead> {
    return await this.leadService.findOneById({ id });
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateCreateDto) {
    return this.leadService.update({ id }, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.leadService.remove({ id });
  }
}

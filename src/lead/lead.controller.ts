import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
} from '@nestjs/common';
import { Lead, Prisma } from '@prisma/client';
import { NotFoundInterceptorInterceptor } from 'src/interceptors/not-found-interceptor.interceptor';
import { LeadService } from './lead.service';

@Controller('lead')
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  @Post()
  create(@Body() data: Prisma.LeadCreateInput): void {
    return this.leadService.create(data);
  }

  @Get()
  async findAll() {
    return await this.leadService.findAll();
  }

  @Get(':id')
  @UseInterceptors(NotFoundInterceptorInterceptor)
  async findOneById(@Param('id') id: string): Promise<Lead> {
    return await this.leadService.findOneById({ id: Number(id) });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.LeadUpdateInput) {
    return this.leadService.update({ id: Number(id) }, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leadService.remove({ id: Number(id) });
  }
}

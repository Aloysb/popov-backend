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
import { Lead } from '@prisma/client';
import { NotFoundInterceptorInterceptor } from 'src/interceptors/not-found-interceptor.interceptor';
import { LeadService } from './lead.service';

@Controller('lead')
export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  // @Post()
  // create() {
  //   return this.leadService.create();
  // }

  @Get()
  async findAll() {
    return await this.leadService.findAll();
  }

  @Get(':id')
  @UseInterceptors(NotFoundInterceptorInterceptor)
  async findOneById(@Param('id') id: string): Promise<Lead> {
    return await this.leadService.findOne({ id: Number(id) });
  }

  // @Patch(':id')
  // update(@Param('id') id: string) {
  //   return this.leadService.update(+id);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.leadService.remove(+id);
  // }
}

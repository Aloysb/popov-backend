import { Module } from '@nestjs/common';
import { LeadService } from './lead.service';
import { LeadController } from './lead.controller';
import { PrismaService } from '../prisma.services';

@Module({
  controllers: [LeadController],
  providers: [LeadService, PrismaService],
})
export class LeadModule {}
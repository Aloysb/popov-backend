import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.services';
import { Lead, Prisma } from '@prisma/client';

@Injectable()
export class LeadService {
  constructor(private prisma: PrismaService) {}

  async Lead(
    leadWhereUniqueInput: Prisma.LeadWhereUniqueInput,
  ): Promise<Lead | null> {
    return this.prisma.lead.findUnique({
      where: leadWhereUniqueInput,
    });
  }
}

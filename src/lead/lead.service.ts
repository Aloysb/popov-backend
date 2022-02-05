import { Injectable } from '@nestjs/common';
import { Lead, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.services';

@Injectable()
export class LeadService {
  constructor(private prisma: PrismaService) {}

  create(leadData: Prisma.LeadCreateInput) {
    this.prisma.lead.create({ data: leadData });
    return;
  }

  findAll() {
    return this.prisma.lead.findMany();
  }

  async findOneById(id: Prisma.LeadWhereUniqueInput): Promise<Lead | null> {
    return this.prisma.lead.findUnique({
      where: id,
    });
  }

  update(id: Prisma.LeadWhereUniqueInput, data: Prisma.LeadUpdateInput) {
    return this.prisma.lead.update({ where: id, data });
  }

  remove(id: Prisma.LeadWhereUniqueInput) {
    return this.prisma.lead.delete({ where: id });
  }
}

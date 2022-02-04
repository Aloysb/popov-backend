import { Injectable } from '@nestjs/common';
import { Lead, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.services';

@Injectable()
export class LeadService {
  constructor(private prisma: PrismaService) {}

  create() {
    return 'This action adds a new lead';
  }

  findAll() {
    return this.prisma.lead.findMany();
  }

  async findOne(
    leadWhereUniqueInput: Prisma.LeadWhereUniqueInput,
  ): Promise<Lead | null> {
    const lead = this.prisma.lead.findUnique({
      where: leadWhereUniqueInput,
    });

    console.log(await lead);

    return lead;
  }

  update(id: number) {
    return `This action updates a #${id} lead`;
  }

  remove(id: number) {
    return `This action removes a #${id} lead`;
  }
}

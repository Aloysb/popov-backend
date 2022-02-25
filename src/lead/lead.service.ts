import { Injectable } from '@nestjs/common';
import { Lead, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateCreateDto } from './dto/update-lead.dto';

@Injectable()
export class LeadService {
  constructor(private prisma: PrismaService) {}

  create(leadData: Prisma.LeadCreateInput) {
    if (leadData.lastCommunication) {
      leadData.lastCommunication = new Date(leadData.lastCommunication);
    }

    return this.prisma.lead.create({ data: leadData });
  }

  findAll() {
    return this.prisma.lead.findMany();
  }

  async findOneById(id: Prisma.LeadWhereUniqueInput): Promise<Lead | null> {
    return this.prisma.lead.findUnique({
      where: id,
      include: {
        company: {
          include: {
            address: true,
          },
        },
      },
    });
  }

  update(id: Prisma.LeadWhereUniqueInput, data: UpdateCreateDto) {
    data.updatedAt = new Date();
    return this.prisma.lead.update({ where: id, data });
  }

  remove(id: Prisma.LeadWhereUniqueInput) {
    return this.prisma.lead.delete({ where: id });
  }
}

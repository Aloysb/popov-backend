import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.CompanyCreateInput) {
    return this.prisma.company.create({
      data,
      include: { address: true },
    });
  }

  findAll() {
    return this.prisma.company.findMany({
      include: { address: true, employees: true },
    });
  }

  findOne(id: number) {
    return this.prisma.company.findUnique({
      where: { id },
      include: { address: true, employees: true },
    });
  }

  update(id: number, data: Prisma.CompanyUpdateInput) {
    data.updatedAt = new Date();
    return this.prisma.company.update({
      where: { id },
      data,
      include: { employees: true, address: true },
    });
  }

  remove(id: number) {
    return this.prisma.company.delete({
      where: { id },
      include: { employees: true },
    });
  }
}

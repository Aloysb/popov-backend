import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AddressService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.AddressCreateInput) {
    return this.prisma.address.create({ data });
  }

  findAll() {
    return this.prisma.address.findMany();
  }

  findOne(id: number) {
    return this.prisma.address.findUnique({ where: { id } });
  }

  update(id: number, data: Prisma.AddressUpdateInput) {
    return this.prisma.address.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.address.delete({ where: { id } });
  }
}

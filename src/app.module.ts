import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadModule } from './lead/lead.module';
import { PrismaModule } from './prisma/prisma.module';
import { CompanyModule } from './company/company.module';
import { addressModule } from './address/address.module';

@Module({
  imports: [LeadModule, PrismaModule, CompanyModule, addressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

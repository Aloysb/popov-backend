import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsPhoneNumber,
  IsString,
  IsDefined,
  IsOptional,
  IsNumber,
  IsDateString,
  IsEmpty,
} from 'class-validator';

export class CreateLeadDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  lastName: string;

  @ApiProperty({ required: false })
  @IsOptional()
  note: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsPhoneNumber('FR')
  phoneNumber: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  title: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  lastCommunication?: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  companyId: number;

  @IsEmpty()
  createdAt: Date;

  @IsEmpty()
  updatedAt: Date;
}

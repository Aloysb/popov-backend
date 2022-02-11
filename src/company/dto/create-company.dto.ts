import {
  IsDefined,
  IsEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCompanyDto {
  @IsDefined()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  addressId: number;

  @IsEmpty()
  updatedAt: Date;
  @IsEmpty()
  createdAt: Date;
}

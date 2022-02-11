import { IsDefined, IsEmpty, IsOptional, IsString } from 'class-validator';

export class CreateaddressDto {
  @IsOptional()
  @IsString()
  alias: string;

  @IsDefined()
  @IsString()
  city: string;

  @IsDefined()
  @IsString()
  postcode: string;

  @IsDefined()
  @IsString()
  street: string;

  @IsEmpty()
  updatedAt: Date;

  @IsEmpty()
  createdAt: Date;
}

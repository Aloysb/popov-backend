import { PartialType } from '@nestjs/mapped-types';
import { CreateaddressDto } from './create-address.dto';

export class UpdateaddressDto extends PartialType(CreateaddressDto) {}

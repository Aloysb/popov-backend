import { Test, TestingModule } from '@nestjs/testing';
import { addressService } from './address.service';

describe('addressService', () => {
  let service: addressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [addressService],
    }).compile();

    service = module.get<addressService>(addressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

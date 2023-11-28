import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { BadRequestException } from '@nestjs/common';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  describe('findOne()', () => {
    it('should be throw if called with invalid params', async () => {
      await expect(service.findOne({ username: '' })).rejects.toThrow(
        new BadRequestException(),
      );
    });
  });

  it('should be not throw if  called  with valid params', async () => {
    await expect(service.findOne({ username: 'maria' })).resolves.not.toThrow();
  });
});

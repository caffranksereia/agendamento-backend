import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../../users/users.service';
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

  describe('getId()', () => {
    it('should be throw if called with invalid params id', async () => {
      await expect(service.getId({ id: '' })).rejects.toThrow(
        new BadRequestException(),
      );
    });
  });

  it('should be not throw if  called  with valid params id', async () => {
    await expect(service.getId({ id: '2' })).resolves.not.toThrow();
  });

  describe('insertUser()', () => {
    it('should be not throw if  called  with valid params ', async () => {
      await expect(
        service.insertUser({ username: '', password: '' }),
      ).rejects.toThrow(new BadRequestException());
    });
  });

  it('should be not throw if  called  with valid params username and password', async () => {
    await expect(
      service.insertUser({ username: 'Fabio Eduardo', password: '123456' }),
    ).resolves.not.toThrow();
  });
});

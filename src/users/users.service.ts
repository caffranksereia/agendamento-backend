import { Injectable, BadRequestException } from '@nestjs/common';
export type User = any;
@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne({ username }): Promise<any> {
    const data = await this.users.find((user) => user.username === username);
    return data;
  }

  async getId({ id }): Promise<any> {
    if (!id || id === null) {
      return new BadRequestException();
    }

    const data = await this.users.find(id);
    return data;
  }

  async getAlId({ id }): Promise<any> {
    if (!id || id === null) {
      return new BadRequestException();
    }
    const data = await this.users;
    return data;
  }

  async insertUser({ username, password }): Promise<any> {
    if (username === null || password === null) {
      return new BadRequestException();
    }
    const data = await this.users.push(username, password);
    return data;
  }
}

import { Injectable } from '@nestjs/common';
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
}

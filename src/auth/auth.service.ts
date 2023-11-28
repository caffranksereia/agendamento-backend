import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}
  async singIn(user: string, pass: string): Promise<any> {
    const data = await this.userService.findOne(user);
    if (data?.password !== pass) {
      throw new UnauthorizedException();
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...res } = data;
    return res;
  }
}

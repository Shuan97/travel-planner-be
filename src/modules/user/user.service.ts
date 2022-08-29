import {
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  private users: User[] = [
    {
      id: '488e8ba7-515d-44ab-abdf-3736b5622b0a',
      name: 'Jarek',
      surname: 'Matura',
      img: 'https://avatars.githubusercontent.com/u/35654946?v=4',
      favColor: '#FFAA32',
    },
    {
      id: '50cb775c-81c9-40d4-bd83-be63228bf56c',
      name: 'John',
      surname: 'Smith',
      img: 'https://avatars.githubusercontent.com/u/35654946?v=4',
      favColor: '#4a34ac',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      this.logger.error(`User #${id} not found`);
      throw new NotFoundException(`User #${id} not found`);
    }
    this.logger.log(`User #${id} found`);
    return user;
  }

  create(userDto: any) {
    this.users.push(userDto);
  }

  update(id: string, userDto: any) {
    const existingUser = this.findOne(id);
    if (existingUser) {
      // do stuff
    }
  }

  remove(id: string) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex > -1) {
      this.users.splice(userIndex, 1);
    }
  }
}

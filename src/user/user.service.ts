import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userEnptity } from './user.entity';
import { User } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(userEnptity)
    private readonly userRepository: Repository<userEnptity>,
  ) {}

  async create(user: User): Promise<userEnptity> {
    const createUser = new userEnptity();
    createUser.email = user.email;
    createUser.password = user.password;
    createUser.name = user.name;
    createUser.role = user.role;

    return this.userRepository.save(createUser);
  }

  async getAll(): Promise<userEnptity[]> {
    return this.userRepository.find();
  }

  async get(id: number): Promise<userEnptity[]> {
    return this.userRepository.find({
      where: {
        id: id,
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { courseEnptity } from './course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(courseEnptity)
    private readonly courseRepository: Repository<courseEnptity>,
  ) {}

  async getAll(): Promise<courseEnptity[]> {
    return this.courseRepository.find();
  }

  async get(courseNum: number): Promise<courseEnptity[]> {
    return this.courseRepository.find({
      where: {
        courseNum: courseNum,
      },
    });
  }
}

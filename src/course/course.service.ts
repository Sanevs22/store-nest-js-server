import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { courseEnptity } from './course.entity';
import { Course } from './course.dto';

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

  async create(courses: Course[]): Promise<courseEnptity[]> {
    let coursesArr = [];

    for (let i = 0; i < courses.length; i++) {
      const course = new courseEnptity();
      course.courseNum = courses[i].courseNum;
      course.name = courses[i].name;
      course.lessonNum = courses[i].lessonNum;
      course.cardNum = courses[i].cardNum;
      course.cardType = courses[i].cardType;
      course.cardHeader = courses[i].cardHeader;
      course.cardText = courses[i].cardText;
      course.cardV1 = courses[i].cardV1;
      course.cardV2 = courses[i].cardV2;
      course.cardV3 = courses[i].cardV3;
      course.cardV4 = courses[i].cardV4;
      course.cardV0 = courses[i].cardV0;
      coursesArr.push(course);
    }

    return await this.courseRepository.save(coursesArr);
  }
}

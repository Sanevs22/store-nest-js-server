import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'product',
      autoLoadEntities: true,
      synchronize: true,
      logging: false,
    }),
    UserModule,
    CourseModule,
  ],
})
export class AppModule {}

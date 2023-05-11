import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class userEnptity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  role: string;
}

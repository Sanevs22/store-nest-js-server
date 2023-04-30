import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class productEnptity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('decimal')
  price: number;

  @Column()
  description: string;

  @Column()
  image: string;
}

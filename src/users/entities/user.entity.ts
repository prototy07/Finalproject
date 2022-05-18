import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column()
  trip_type: string;

  @Column()
  adult: number;

  @Column()
  children: number;

  @Column()
  infrants: number;

  @Column('date', { nullable: true })
  Depart: Date;

  @Column('date', { nullable: true })
  Arrive: Date;
}

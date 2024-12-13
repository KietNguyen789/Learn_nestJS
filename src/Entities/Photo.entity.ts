import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Staff } from './Staff.entity';

@Entity()
export class Photo {

  @PrimaryGeneratedColumn()
  photo_id: number;

  @Column()
  file_name: string;

  @Column()
  file_content: string;

  @Column()
  Staff_id: number;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(type => Staff, staff => staff.id)
  photos: Staff;

}
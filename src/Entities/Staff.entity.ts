import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Photo } from './Photo.entity';
@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  role: string;

  @Column({ default: true })
  isActive: boolean;

  

  //how to declare relations in entity
  
  @OneToMany(type => Photo, photo => photo.Staff_id)
  photos: Photo[];
}
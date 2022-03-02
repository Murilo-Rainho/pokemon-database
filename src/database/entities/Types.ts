import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

@Entity('types')
export class Type {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column()
  hex_color: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

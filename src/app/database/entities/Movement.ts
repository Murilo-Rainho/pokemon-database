import {
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  Entity,
  JoinColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';
import Type from './Type';

@Entity('movements')
class Movement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  movement: string;

  @Column()
  power: number;

  @Column()
  description: string;

  @Column()
  type_id: string;

  @ManyToOne(() => Type)
  @JoinColumn({ name: 'type_id' })
  type: Type;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export default Movement;

import {
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  Entity,
  JoinColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

@Entity('movements')
export class Movement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  movement: string;

  @Column()
  power: number;

  @Column()
  descriptions: string;

  @Column()
  type_id: string;

  @ManyToOne(() => Movement)
  @JoinColumn({ name: 'type_id' })
  movements: string;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import Type from './Type';

import { v4 as uuid } from 'uuid';

@Entity('pokemons')
class Pokemon {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  weight: number;

  @Column()
  height: number;

  @ManyToMany(() => Type, (type) => type.pokemons, { eager: true })
  @JoinTable()
  types: Type[];

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export default Pokemon;

import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { v4 as uuid } from 'uuid';
import Pokemon from './Pokemon';

@Entity('types')
class Type {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column()
  hex_color: string;

  @ManyToMany(() => Pokemon, (pokemon) => pokemon.types)
  @JoinTable()
  pokemons: Pokemon[];

  constructor() {
    if (!this.id) this.id = uuid();
  }
}

export default Type;

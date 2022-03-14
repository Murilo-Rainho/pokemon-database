import {
  Entity,
  JoinTable,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

import Pokemon from './Pokemon';
import Type from './Type';

@Entity('types_pokemons_pokemons')
class TypePokemonPokemon {
  @PrimaryColumn()
  typesId: string;

  @PrimaryColumn()
  pokemonsId: string;

  @OneToOne(() => Type)
  @JoinTable()
  types: Promise<Type[]>;

  @OneToOne(() => Pokemon)
  @JoinTable()
  pokemons: Promise<Pokemon[]>;
}

export default TypePokemonPokemon;

import {
  Pokemon,
  Movement,
  Type,
  TypePokemonPokemon as TypePokemon,
} from '../../database/entities';

export type entities = Pokemon | Movement | Type | TypePokemon;

interface IRepository {
  findAll(): Promise<entities[]>;
  findOne(id: string | number): Promise<entities>;
  // createOne(elementData: entities): Promise<void>;
  // editOne(elementData: entities, id: string | number): Promise<void>;
  deleteOne(id: string | number): Promise<void>;
}

export default IRepository;

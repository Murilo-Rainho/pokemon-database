import { Type } from "../../database/entities";

interface PokemonResponse {
  id: string;
  name: string;
  weight: number;
  height: number;
  types?: Type[] | Promise<Type[]>;
}

export default PokemonResponse;

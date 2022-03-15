import { Type } from "../../database/entities";
import IPokemon from "./IPokemon";

interface PokemonResponse extends IPokemon {
  id: string;
  types?: Type[] | Promise<Type[]>;
}

export default PokemonResponse;

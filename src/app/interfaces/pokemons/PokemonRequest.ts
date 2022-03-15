import IPokemon from "./IPokemon";

interface PokemonRequest extends IPokemon {
  typesId: string[];
}

export default PokemonRequest;

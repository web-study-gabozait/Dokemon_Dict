import { customAxios } from "../../libs/axios";
import {
  PokemonResponse,
  PokemonsResponse,
} from "../../types/pokemon/pokemon.type";
import { getPokemonParam, getPokemonsParam } from "./pokemon.param";

class PokemonRepository {
  public async getPokemons({
    limit,
    offset,
  }: getPokemonsParam): Promise<PokemonsResponse> {
    const { data } = await customAxios.get(
      `/pokemon/?limit=${limit}&offset=${offset}`
    );

    return data;
  }

  public async getPokemon({ id }: getPokemonParam): Promise<PokemonResponse> {
    const { data } = await customAxios.get(`/pokemon/${id}`);

    return data;
  }
}

export default new PokemonRepository();

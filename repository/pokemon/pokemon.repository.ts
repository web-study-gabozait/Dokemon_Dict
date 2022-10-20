import { customAxios } from "../../libs/axios";
import { PokemonsResponse } from "../../types/pokemon/pokemon.type";
import { getPokemonsParam } from "./pokemon.param";

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
}

export default new PokemonRepository();

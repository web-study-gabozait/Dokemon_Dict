import { useQuery } from "react-query";
import { getPokemonsParam } from "../../repository/pokemon/pokemon.param";
import pokemonRepository from "../../repository/pokemon/pokemon.repository";

export const useGetPokemons = ({ limit, offset }: getPokemonsParam) =>
  useQuery(
    "post/getPokemons",
    () => pokemonRepository.getPokemons({ limit, offset }),
    { cacheTime: 1000 * 60 * 5, staleTime: 1000 * 60 }
  );

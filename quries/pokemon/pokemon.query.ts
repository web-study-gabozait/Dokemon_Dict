import { useInfiniteQuery, useQuery } from "react-query";
import {
  getPokemonParam,
  getPokemonsParam,
} from "../../repository/pokemon/pokemon.param";
import pokemonRepository from "../../repository/pokemon/pokemon.repository";
import queryStringParser from "../../utils/queryStringParser";

export const useGetPokemons = ({ limit, offset }: getPokemonsParam) =>
  useInfiniteQuery(
    "pokemon/getPokemons",
    ({ pageParam = 0 }) =>
      pokemonRepository.getPokemons({ limit, offset: pageParam }),
    {
      getNextPageParam: (nextPage) =>
        queryStringParser(nextPage.next.split("/")[6]!).offset,
    }
  );

export const useGetPokemon = ({ id }: getPokemonParam) =>
  useQuery(
    ["pokemon/getPokemon", id],
    () => pokemonRepository.getPokemon({ id }),
    { cacheTime: 1000 * 60 * 5, staleTime: 1000 * 60 }
  );

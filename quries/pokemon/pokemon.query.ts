import { useQuery } from "react-query";
import {
  getPokemonHabitatParam,
  getPokemonParam,
  getPokemonsParam,
} from "../../repository/pokemon/pokemon.param";
import pokemonRepository from "../../repository/pokemon/pokemon.repository";

export const useGetPokemons = ({ limit, offset }: getPokemonsParam) =>
  useQuery(
    ["pokemon/getPokemons", offset],
    () => pokemonRepository.getPokemons({ limit, offset }),
    { cacheTime: 1000 * 60 * 5, staleTime: 1000 * 60 }
  );

export const useGetPokemon = ({ id }: getPokemonParam) =>
  useQuery(
    ["pokemon/getPokemon", id],
    () => pokemonRepository.getPokemon({ id }),
    { cacheTime: 1000 * 60 * 5, staleTime: 1000 * 60 }
  );

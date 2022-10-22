import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGetPokemons } from "../../quries/pokemon/pokemon.query";

const useHome = () => {
  const { ref, inView } = useInView();

  const {
    data: serverPokemonsData,
    isLoading: serverPokemonDataIsLoading,
    fetchNextPage,
  } = useGetPokemons({
    limit: 20,
    offset: 1,
  });

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  return {
    ref,
    serverPokemonDataIsLoading,
    serverPokemonsData,
  };
};

export default useHome;

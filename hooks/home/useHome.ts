import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useGetPokemons } from "../../quries/pokemon/pokemon.query";

const useHome = () => {
  const { ref, inView } = useInView();

  const {
    data: serverPokemonsData,
    isLoading,
    fetchNextPage,
  } = useGetPokemons({
    limit: 20,
    offset: 644,
  });

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  return {
    ref,
    serverPokemonsData,
  };
};

export default useHome;

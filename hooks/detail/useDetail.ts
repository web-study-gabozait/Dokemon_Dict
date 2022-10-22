import { useRouter } from "next/router";
import { useGetPokemon } from "../../quries/pokemon/pokemon.query";

const useDetail = () => {
  const router = useRouter();

  const pokemonId = router.query.id;

  const { data: serverPokemonData } = useGetPokemon({
    id: pokemonId as string,
  });

  return { pokemonId, serverPokemonData };
};

export default useDetail;

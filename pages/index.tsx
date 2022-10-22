import type { NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import Home from "../components/home";
import pokemonRepository from "../repository/pokemon/pokemon.repository";

const HomePage: NextPage = () => {
  return <Home />;
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["pokemon/getPokemons", 644], () =>
    pokemonRepository.getPokemons({ limit: 20, offset: 644 })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default HomePage;

import type { NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";
import Home from "../components/home";
import pokemonRepository from "../repository/pokemon/pokemon.repository";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dokemon</title>
        <meta
          name="description"
          content="Dokemon은 포켓몬을 조회하고 찾아보는 사이트입니다."
        />
        <meta property="og:title" content={"Dokemon"} />
        <meta
          property="og:description"
          content="Dokemon은 포켓몬을 조회하고 찾아보는 사이트입니다."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Dokemon" />
        <meta
          property="twitter:description"
          content="Dokemon은 포켓몬을 조회하고 찾아보는 사이트입니다."
        />
      </Head>
      <Home />
    </div>
  );
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("pokemon/getPokemons", () =>
    pokemonRepository.getPokemons({ limit: 20, offset: 0 })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default HomePage;

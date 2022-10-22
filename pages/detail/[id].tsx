import { GetServerSidePropsContext, NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import Detail from "../../components/detail";
import pokemonRepository from "../../repository/pokemon/pokemon.repository";

const DetailPage: NextPage = () => {
  return <Detail />;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["pokemon/getPokemon", ctx.query.id], () =>
    pokemonRepository.getPokemon({ id: ctx.query.id as string })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default DetailPage;

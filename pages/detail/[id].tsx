import { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient } from "react-query";
import Detail from "../../components/detail";
import pokemonRepository from "../../repository/pokemon/pokemon.repository";

interface Props {
  id: number;
}

const DetailPage: NextPage<Props> = ({ id }: Props) => {
  return (
    <div>
      <Head>
        <title>{id ? `Dokemon ${id}` : "Dokemon"}</title>
        <meta
          name="description"
          content="Dokemon은 포켓몬을 조회하고 찾아보는 사이트입니다."
        />
        <meta property="og:title" content={id ? `Dokemon ${id}` : "Dokemon"} />
        <meta
          property="og:description"
          content="Dokemon은 포켓몬을 조회하고 찾아보는 사이트입니다."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content={id ? `Dokemon ${id}` : "Dokemon"}
        />
        <meta
          property="twitter:description"
          content="Dokemon은 포켓몬을 조회하고 찾아보는 사이트입니다."
        />
      </Head>
      <Detail />
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["pokemon/getPokemon", ctx.query.id], () =>
    pokemonRepository.getPokemon({ id: ctx.query.id as string })
  );

  return {
    props: {
      id: ctx.query.id,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default DetailPage;

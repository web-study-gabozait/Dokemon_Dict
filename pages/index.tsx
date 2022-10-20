import type { NextPage } from "next";
import { dehydrate, QueryClient } from "react-query";
import pokemonRepository from "../repository/pokemon/pokemon.repository";

const Home: NextPage = () => {
  return <div>asd</div>;
};

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("pokemon/getPokemons", () =>
    pokemonRepository.getPokemons({ limit: 20, offset: 644 })
  );
  // await Promise.all([
  //   query.tag !== "전체조회"
  //     ? queryClient.prefetchQuery(["post/getMyPostsByTag", query.tag], () =>
  //         postRepository.getMyPostsByTag({ tag: query.tag as string })
  //       )
  //     : queryClient.prefetchQuery("post/getMyPosts", () =>
  //         postRepository.getMyPosts()
  //       ),
  //   queryClient.prefetchQuery("member/getMyMember", () =>
  //     memberRepository.getMyMember()
  //   ),
  //   queryClient.prefetchQuery("tag/getMyTags", () => tagRepository.getMyTags()),
  // ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;

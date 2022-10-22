import useHome from "../../hooks/home/useHome";
import useHomeSearch from "../../hooks/home/useHomeSearch";
import PokemonCard from "../common/PokemonCard";
import HomeLoading from "./HomeLoading";
import {
  HomeContainer,
  HomeLoadingContainer,
  HomePanel,
  HomeSearch,
  HomeWrap,
} from "./style";

const Home = () => {
  const { ref, serverPokemonsData } = useHome();
  const { keyword, onChangeKeyword, onSubmitKeyword } = useHomeSearch();

  return (
    <HomeContainer>
      <HomePanel>
        <form onSubmit={onSubmitKeyword}>
          <HomeSearch
            placeholder="Please enter id and name"
            value={keyword}
            onChange={onChangeKeyword}
          />
        </form>
      </HomePanel>
      <HomeWrap>
        {serverPokemonsData?.pages?.map((page) =>
          page.results.map((item) => (
            <PokemonCard data={item} key={item.name} />
          ))
        )}
        <HomeLoadingContainer ref={ref}>
          <HomeLoading />
        </HomeLoadingContainer>
      </HomeWrap>
    </HomeContainer>
  );
};

export default Home;

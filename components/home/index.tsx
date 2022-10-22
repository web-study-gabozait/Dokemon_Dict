import useHome from "../../hooks/home/useHome";
import useHomeSearch from "../../hooks/home/useHomeSearch";
import PokemonCard from "../common/PokemonCard";
import { HomeContainer, HomePanel, HomeSearch, HomeWrap } from "./style";

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
      </HomeWrap>
      <div ref={ref}>sss</div>
    </HomeContainer>
  );
};

export default Home;

import { useGetPokemons } from "../../quries/pokemon/pokemon.query";
import PokemonCard from "../common/PokemonCard";
import { HomeCardWrap, HomeContainer, HomePanel, HomeWrap } from "./style";

const Home = () => {
  const { data: serverPokemonsData, isLoading } = useGetPokemons({
    limit: 20,
    offset: 644,
  });

  return (
    <HomeContainer>
      <HomePanel />
      <HomeWrap>
        <HomeCardWrap>
          {!isLoading &&
            serverPokemonsData?.results.map((item) => (
              <PokemonCard data={item} key={item.name} />
            ))}
        </HomeCardWrap>
      </HomeWrap>
    </HomeContainer>
  );
};

export default Home;

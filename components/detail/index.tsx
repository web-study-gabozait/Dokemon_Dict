import { useRouter } from "next/router";
import { useGetPokemon } from "../../quries/pokemon/pokemon.query";
import DetailInfoTable from "./DetailInfoTable";
import {
  DetailContainer,
  DetailInfoImg,
  DetailInfoTextName,
  DetailInfoTextWrap,
  DetailInfoWrap,
  DetailPanel,
} from "./style";

const Detail = () => {
  const router = useRouter();

  const pokemonId = router.query.id;

  const { data: serverPokemonData } = useGetPokemon({
    id: pokemonId as string,
  });

  console.log(serverPokemonData);

  return (
    <DetailContainer>
      <DetailPanel />
      <DetailInfoWrap>
        <DetailInfoImg
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
        />
        <DetailInfoTextWrap>
          <DetailInfoTextName>{serverPokemonData?.name}</DetailInfoTextName>
          {serverPokemonData && <DetailInfoTable data={serverPokemonData} />}
        </DetailInfoTextWrap>
      </DetailInfoWrap>
    </DetailContainer>
  );
};

export default Detail;

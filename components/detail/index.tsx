import dynamic from "next/dynamic";
import useDetail from "../../hooks/detail/useDetail";
import DetailInfoMove from "./DetailInfoMove";
const PokemonBigCard = dynamic(() => import("../common/PokemonBigCard"), {
  ssr: false,
});

import DetailInfoStat from "./DetailInfoStat";
import DetailInfoTable from "./DetailInfoTable";
import {
  DetailContainer,
  DetailInfoImg,
  DetailInfoPreviewWrap,
  DetailInfoWrap,
  DetailPanel,
} from "./style";

const Detail = () => {
  const { pokemonId, serverPokemonData } = useDetail();

  return (
    <DetailContainer>
      <DetailPanel />
      <DetailInfoPreviewWrap>
        <DetailInfoImg
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
        />
        {serverPokemonData && (
          <PokemonBigCard isOverflowView={false} title={serverPokemonData.name}>
            <DetailInfoTable data={serverPokemonData} />
            <DetailInfoStat data={serverPokemonData.stats} />
          </PokemonBigCard>
        )}
      </DetailInfoPreviewWrap>
      <DetailInfoWrap>
        <PokemonBigCard isOverflowView={true} title="moves">
          {serverPokemonData && (
            <DetailInfoMove data={serverPokemonData.moves} />
          )}
        </PokemonBigCard>
      </DetailInfoWrap>
    </DetailContainer>
  );
};

export default Detail;

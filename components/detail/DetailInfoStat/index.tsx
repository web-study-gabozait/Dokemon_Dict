import { PokemonStat } from "../../../types/pokemon/pokemon.type";
import {
  DetailInfoStatBaseStat,
  DetailInfoStatContainer,
  DetailInfoStatTitle,
  DetailInfoStatWrap,
} from "./style";

interface Props {
  data: PokemonStat[];
}

const DetailInfoStat = ({ data }: Props) => {
  return (
    <DetailInfoStatContainer>
      {data.map((stat) => (
        <DetailInfoStatWrap>
          <DetailInfoStatTitle>{stat.stat.name}</DetailInfoStatTitle>
          <DetailInfoStatBaseStat>{stat.base_stat}</DetailInfoStatBaseStat>
        </DetailInfoStatWrap>
      ))}
    </DetailInfoStatContainer>
  );
};

export default DetailInfoStat;

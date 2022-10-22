import { PokemonDetail } from "../../../types/pokemon/pokemon.type";
import dataTransform from "../../../utils/transform/dataTransform";
import {
  DetailInfoTableContainer,
  DetailInfoTableTd,
  DetailInfoTableTh,
  DetailInfoTableTr,
  DetailInfoTableType,
  DetailInfoTableTypeTd,
} from "./style";

interface Props {
  data: PokemonDetail;
}

const DetailInfoTable = ({ data }: Props) => {
  return (
    <DetailInfoTableContainer>
      <DetailInfoTableTr>
        <DetailInfoTableTh>Type</DetailInfoTableTh>
        <DetailInfoTableTypeTd>
          {data.types.map((type) => (
            <DetailInfoTableType
              style={{
                backgroundColor: dataTransform.pokemonTypeTransform(
                  type.type.name
                ).color,
              }}
            >
              {type.type.name}
            </DetailInfoTableType>
          ))}
        </DetailInfoTableTypeTd>
      </DetailInfoTableTr>
      <DetailInfoTableTr>
        <DetailInfoTableTh>Height</DetailInfoTableTh>
        <DetailInfoTableTd>{data.height}m</DetailInfoTableTd>
      </DetailInfoTableTr>
      <DetailInfoTableTr>
        <DetailInfoTableTh>Weight</DetailInfoTableTh>
        <DetailInfoTableTd>{(data.weight / 10).toFixed(1)}kg</DetailInfoTableTd>
      </DetailInfoTableTr>
    </DetailInfoTableContainer>
  );
};

export default DetailInfoTable;

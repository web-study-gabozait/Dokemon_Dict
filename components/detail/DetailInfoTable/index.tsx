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
  console.log(data);

  return (
    <DetailInfoTableContainer>
      <DetailInfoTableTr>
        <DetailInfoTableTh>타입</DetailInfoTableTh>
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
        <DetailInfoTableTh>키</DetailInfoTableTh>
        <DetailInfoTableTd>{data.height}m</DetailInfoTableTd>
      </DetailInfoTableTr>
      <DetailInfoTableTr>
        <DetailInfoTableTh>몸무게</DetailInfoTableTh>
        <DetailInfoTableTd>{(data.weight / 10).toFixed(1)}kg</DetailInfoTableTd>
      </DetailInfoTableTr>
      <DetailInfoTableTr>
        <DetailInfoTableTh>몸무게</DetailInfoTableTh>
        <DetailInfoTableTd>asdad</DetailInfoTableTd>
      </DetailInfoTableTr>
    </DetailInfoTableContainer>
  );
};

export default DetailInfoTable;

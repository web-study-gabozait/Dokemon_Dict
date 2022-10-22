import { PokemonMove } from "../../../types/pokemon/pokemon.type";
import {
  DetailInfoMoveContainer,
  DetailInfoMoveLearnLocation,
  DetailInfoMoveName,
} from "./style";

interface Props {
  data: PokemonMove[];
}

const DetailInfoMove = ({ data }: Props) => {
  return (
    <>
      {data.map((move) => (
        <DetailInfoMoveContainer id={move.move.name}>
          <DetailInfoMoveName>{move.move.name}</DetailInfoMoveName>
          <DetailInfoMoveLearnLocation>
            acquired by {move.version_group_details[0].move_learn_method.name}
          </DetailInfoMoveLearnLocation>
        </DetailInfoMoveContainer>
      ))}
    </>
  );
};

export default DetailInfoMove;

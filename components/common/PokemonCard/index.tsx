import { useRouter } from "next/router";
import { Pokemon } from "../../../types/pokemon/pokemon.type";
import {
  PokemonCardContainer,
  PokemonCardImg,
  PokemonName,
  PokemonTextWrap,
} from "./style";

interface Props {
  data: Pokemon;
}

const PokemonCard = ({ data }: Props) => {
  const pokemonId = data.url.split("/")[6];
  const router = useRouter();

  return (
    <PokemonCardContainer onClick={() => router.push(`/detail/${pokemonId}`)}>
      <PokemonCardImg
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
      />
      <PokemonTextWrap>
        <PokemonName>{data.name}</PokemonName>
      </PokemonTextWrap>
    </PokemonCardContainer>
  );
};

export default PokemonCard;

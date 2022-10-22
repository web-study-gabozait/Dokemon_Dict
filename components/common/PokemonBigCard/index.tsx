import { ReactNode } from "react";
import { PokemonBigCardContainer, PokemonBigCardTitle } from "./style";

interface Props {
  title: string;
  isOverflowView: boolean;
  children: ReactNode;
}

const PokemonBigCard = ({ title, isOverflowView, children }: Props) => {
  return (
    <PokemonBigCardContainer isOverflowView={isOverflowView}>
      <PokemonBigCardTitle isOverflowView={isOverflowView}>
        {title}
      </PokemonBigCardTitle>
      {children}
    </PokemonBigCardContainer>
  );
};

export default PokemonBigCard;

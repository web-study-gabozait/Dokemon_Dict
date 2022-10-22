import styled, { css } from "styled-components";

export const PokemonBigCardContainer = styled.div<{ isOverflowView: boolean }>`
  width: 606px;
  height: 600px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  display: flex;
  flex-direction: column;
  padding: 40px;

  ${({ isOverflowView }) =>
    isOverflowView
      ? css`
          overflow-y: scroll;
          row-gap: 10px;
        `
      : css`
          justify-content: space-between;
        `}
`;

export const PokemonBigCardTitle = styled.h1<{ isOverflowView: boolean }>`
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.contrast};

  ${({ isOverflowView }) =>
    isOverflowView
      ? css`
          margin-bottom: 45px;
        `
      : css`
          margin-bottom: 0px;
        `}
`;

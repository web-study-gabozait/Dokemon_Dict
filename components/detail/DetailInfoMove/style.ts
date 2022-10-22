import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const DetailInfoMoveContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 52px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  padding: 0px 15px;
`;

export const DetailInfoMoveName = styled.h1`
  font-size: 25px;
  color: ${({ theme }) => theme.contrast};
`;

export const DetailInfoMoveLearnLocation = styled.span`
  color: ${palette.gray[200]};
  font-size: 25px;
`;

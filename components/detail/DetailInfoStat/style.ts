import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const DetailInfoStatContainer = styled.div`
  width: 100%;
  display: flex;
  row-gap: 30px;
  column-gap: 30px;
  flex-wrap: wrap;
`;

export const DetailInfoStatWrap = styled.div`
  width: 47%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DetailInfoStatTitle = styled.div`
  min-width: 70px;
  height: 44px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.contrast};
  border: 1px solid ${({ theme }) => theme.borderColor};
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
`;

export const DetailInfoStatBaseStat = styled.span`
  color: ${({ theme }) => theme.contrast};
`;

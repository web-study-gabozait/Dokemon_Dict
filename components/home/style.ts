import styled from "styled-components";
import { palette } from "../../styles/palette";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomePanel = styled.div`
  width: 100%;
  height: 618px;
  background-color: ${palette.main};
`;

export const HomeWrap = styled.div`
  width: 1252px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
`;

export const HomeCardWrap = styled.div`
  width: 626px;
  display: flex;
  justify-content: space-between;
  row-gap: 20px;
  flex-wrap: wrap;
  padding: 15px;
  transform: translateY(-270px);
`;

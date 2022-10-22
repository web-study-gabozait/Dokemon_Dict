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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeWrap = styled.div`
  width: 1252px;
  min-height: 600px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  justify-content: space-between;
  transform: translateY(-240px);
`;

export const HomeSearch = styled.input`
  width: 1252px;
  height: 100px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  font-size: 30px;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: 0px;
  padding: 0px 60px;
  color: ${({ theme }) => theme.contrast};

  ::-webkit-input-placeholder {
    color: ${palette.gray[200]};
  }
`;

export const HomeLoadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  justify-content: space-between;
`;

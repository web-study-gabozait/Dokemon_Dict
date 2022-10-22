import styled from "styled-components";
import { palette } from "../../../styles/palette";

export const DetailInfoTableContainer = styled.div`
  width: 100%;
  border-collapse: collapse;
`;

export const DetailInfoTableTr = styled.tr`
  display: flex;
`;

export const DetailInfoTableTh = styled.div`
  min-width: 242px;
  background-color: ${({ theme }) => theme.backgroundColor};
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.contrast};
`;

export const DetailInfoTableTd = styled.div`
  width: 100%;
  height: 50px;
  font-size: 24px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  padding: 0px 20px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.contrast};
`;

export const DetailInfoTableTypeTd = styled.div`
  width: 100%;
  height: 50px;
  padding: 0px 20px;
  font-size: 24px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const DetailInfoTableType = styled.div`
  height: 30px;
  padding: 10px;
  border-radius: 20px;
  color: white;
  font-size: 15px;
  display: flex;
  align-items: center;
`;

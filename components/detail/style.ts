import styled from "styled-components";
import { palette } from "../../styles/palette";

export const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const DetailPanel = styled.div`
  width: 100%;
  height: 618px;
  background-color: ${palette.main};
`;

export const DetailInfoWrap = styled.div`
  width: 1252px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translate(-50%, -0%);
`;

export const DetailInfoImg = styled.img`
  width: 450px;
  height: 100%;
  object-fit: cover;
  margin: 0px auto;
`;

export const DetailInfoTextWrap = styled.div`
  width: 626px;
  min-height: 600px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${({ theme }) => theme.backgroundColor2};
  padding: 40px;
`;

export const DetailInfoTextName = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.contrast};
  margin-bottom: 20px;
`;

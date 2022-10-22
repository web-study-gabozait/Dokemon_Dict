import styled from "styled-components";
import { palette } from "../../styles/palette";

export const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 70px;
`;

export const DetailPanel = styled.div`
  width: 100%;
  height: 618px;
  background-color: ${palette.main};
`;

export const DetailInfoPreviewWrap = styled.div`
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
export const DetailInfoWrap = styled.div`
  width: 1252px;
  display: flex;
  flex-wrap: wrap;
  padding-top: 174px;
  column-gap: 40px;
`;

import styled from "styled-components";

export const DarkmodeButtonContainer = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.backgroundColor2};
  border: 0px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
`;

export const DarkmodeButtonIcon = styled.div`
  font-size: 30px;
  color: ${({ theme }) => theme.contrast};
`;

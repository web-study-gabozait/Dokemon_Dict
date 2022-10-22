import styled from "styled-components";

export const ScrollTopButtonContainer = styled.button`
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
  bottom: 110px;
  right: 40px;
  cursor: pointer;
`;

export const ScrollTopButtonIcon = styled.div`
  width: 30px;
  height: 30px;
  font-size: 30px;
  color: ${({ theme }) => theme.contrast};
`;

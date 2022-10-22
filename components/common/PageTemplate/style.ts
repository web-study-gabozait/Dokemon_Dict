import styled from "styled-components";

export const PageTemplateContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

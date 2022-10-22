import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Pretendard-Regular' !important;
    }
    a {
      text-decoration: none;
    }

    @keyframes skeleton {
      0% {
        background-color: rgba(182, 182, 182, 0.1);
      }
      50% {
        background-color: rgba(182, 182, 182, 0.25);
      }
      100% {
        background-color: rgba(182, 182, 182, 0.1);
    }
    }

    ${reset}
`;

export default GlobalStyle;

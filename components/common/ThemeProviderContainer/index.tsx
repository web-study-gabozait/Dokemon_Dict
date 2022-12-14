import { ThemeProvider } from "styled-components";
import useTheme from "../../../hooks/theme/useTheme";
import GlobalStyle from "../../../styles/GlobalStyle";
import PageTemplate from "../PageTemplate";

const ThemeProviderContainer = ({ Component, pageProps }: any) => {
  const { styledTheme } = useTheme();

  return (
    <ThemeProvider theme={styledTheme}>
      <GlobalStyle />
      <PageTemplate>
        <Component {...pageProps} />
      </PageTemplate>
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;

import "../styles/globals.css";
import { createTheme } from "@material-ui/core/styles";
import { StylesProvider, ThemeProvider } from "@material-ui/styles";
import { ThemeProvider as SCThemeProvider } from "styled-components";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d32f2f",
    },
    action: {
      disabledBackground: "#d32f2f",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <SCThemeProvider theme={theme}>
          <Component {...pageProps} />
        </SCThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default MyApp;

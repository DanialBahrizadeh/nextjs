import "../styles/globals.css";
// use this command after installing bootstrap to use bootsrap
// import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#355C7D",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

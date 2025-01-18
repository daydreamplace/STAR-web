import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import StarryNight from "./components/common/StarryNight";
import MeteorEffect from "./components/common/MeteorEffect";
import theme from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StarryNight />
      <MeteorEffect count={20} angle={45} direction="right" />
      <Header />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

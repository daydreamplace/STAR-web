import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import Feature from "./pages/Feature";
import Team from "./pages/Team";
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
      <Router>
        <StarryNight />
        <MeteorEffect count={20} angle={45} direction="right" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

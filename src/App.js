import { Container } from "@mui/system";
import "./App.scss";
import Dictionary from "./components/Dictionary";
import Footer from "./components/Footer";

function App() {
  return (
    <Container className="app-wrapper">
      <header className="app-header">LOGO</header>
      <Dictionary />
      <Footer />
    </Container>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contato from './pages/Contato';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from './pages/Home';
import Menu from "./components/Menu/Menu";
import Sobre from './pages/Sobre';

function App() {
  return (

    <Router>
        <Header Link={Link} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
        <Footer Link={Link} />
    </Router>
  );
}

export default App;
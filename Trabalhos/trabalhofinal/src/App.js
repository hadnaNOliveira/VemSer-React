import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { NYContextProvider } from "./context/NYContext";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Ciencia from "./pages/Ciencia/Ciencia";
import Saude from "./pages/Saude/Saude";
import Tecnologia from "./pages/Tecnologia/Tecnologia";
import Mundo from "./pages/Mundo/Mundo";

function App() {
  return (
  <BrowserRouter>
    <NYContextProvider>
      <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/saude" element={<Saude />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/mundo" element={<Mundo />} />
          <Route path="/ciencia" element={<Ciencia />} />
        </Routes>
    </NYContextProvider>
  </BrowserRouter>
  
  );
}

export default App;

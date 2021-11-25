import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./pages/Login";
import Pessoa from "./pages/Pessoa";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Routers = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/pessoa" element={<Pessoa />} />
      </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default Routers;
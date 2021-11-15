import Logo from "../cogumelo.jpeg"
import Address from "../components/Address";
import Conteudo from "../components/Conteudo";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <h1>Estamos aprendendo HTML e CSS com o melhor professor de todos</h1>

      <div>
      <img src={Logo} alt="Cogumelo" />
      <img src={Logo} alt="Cogumelo" />
      <img src={Logo} alt="Cogumelo" />
      </div>

      <Conteudo />
      <Address />
    </>
  );
}


export default Home;
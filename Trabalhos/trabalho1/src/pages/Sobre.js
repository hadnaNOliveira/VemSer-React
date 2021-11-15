import Header from "../components/Header/Header";
import Conteudo from "../components/Conteudo";
import Footer from "../components/Footer/Footer";

function Sobre() {
  return (
    <>
      <h1>Sobre a DBC</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/h9HiHkEar-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <Conteudo />

    </>
  );
}


export default Sobre;
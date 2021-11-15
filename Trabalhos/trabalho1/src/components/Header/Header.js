import style from "../Header/Header.module.css"
import Menu from "../Menu/Menu";
import Logo from "/home/usuario/VemSer-React/Trabalhos/trabalho1/src/cogumelo.jpeg"

function Header({Link}) {
  return (
    <>
      <div className={style.Header}>
      <div className={style.logo}>
      <img src={Logo} alt="Cogumelo" />
      <h3>Melhores alunos do Vemser de todos os tempos</h3>
      </div>
     <Menu Link={Link}/>
      </div>
      
    </>
  );
}

export default Header;
import style from "../Footer/Footer.module.css"
import Menu from "../Menu/Menu";

function Footer({Link}) {
  return(
    <>
    <div className={style.Footer}>
    <Menu Link={Link} />

      <address>Av. Andaraí 531 - Porto Alegre</address>
    </div>
    </>
  )
}

export default Footer;
import style from "./Menu.module.css"

function Menu({Link}) {
  return (
    <>
      <div className={style.Menu}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
      </div>
    </>
  )
}

export default Menu;
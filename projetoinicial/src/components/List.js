import PropTypes from 'prop-types'; 
import Item from "./Item";

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item menu="Home" url={30}/>
        <Item menu="Sobre" url={20} />
        <Item menu="Contato" url={40}/>
      </ul>
    </>
  );
}

export default List;
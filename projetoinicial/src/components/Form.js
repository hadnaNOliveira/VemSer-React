import { useState } from 'react';

function Form() {

  function CadastraUsuario(e) {
    // preventDefault evita que a tela recarregue
    e.preventDefault();
    listUser.push({nome: nome, id: 1});
    console.log(listUser);
  }

  const [nome, setNome] = useState('Joãozinho');
  const [apelido, setApelido] = useState();
  const [listUser, setListUser] = useState([]);

  
  return (
    <>
      <h1>Meu Cadastro</h1>
      <form onSubmit={CadastraUsuario}>
        <div>
          <input onChange={(e) => setNome(e.target.value)} type="text" placeholder="Digite seu nome" />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
      {/* <div>
        {listUser.map(user => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div> */}
    </>
  );
}

export default Form;
import { useState } from 'react'
import CardsFuncionarios from './CardsFuncionarios';


function FormsFuncionarios() {

  const [listTrabalhadores, setListTrabalhadores] = useState([]);
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [profissao, setProfissao] = useState();

  function cadastrarTrabalhador(e) {
    e.preventDefault();
    if(nome && email && profissao){
      listTrabalhadores.push({nome: nome, email: email, profissao: profissao })
    }else {
      alert("escreve disgraçaaaaaaaaa");
    }
    setNome('');
    setEmail('');
    setProfissao('');
  }

  function removerTrabalhadores(nome) {
    setListTrabalhadores(listTrabalhadores.filter(e=> e.nome !== nome)); 
  }

  return (
    <>
      <h2>Trabalhadores</h2>
      <form>
        <div>
        <input onChange={(e)=> setNome(e.target.value)} value={nome} type="text" placeholder="Digite o nome completo" />
        </div>
        <div>
        <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder="Digite seu email" />
        </div>
        <div>
          <input onChange={(e)=> setProfissao(e.target.value)} value={profissao} type="text" placeholder="Digite sua profissão" />
        </div>
        <button onClick={cadastrarTrabalhador} type="submit">Adicionar Usuários</button>
      </form>
      {listTrabalhadores.map((e, index) => (
        <div>
          <CardsFuncionarios key={index} nome={e.nome} email={e.email} profissao={e.profissao} />
          <button onClick={()=>removerTrabalhadores(e.email)} type="submit">Remover</button>
      </div>
      ))}
    </>
  );
}

export default FormsFuncionarios;
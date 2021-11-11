import PropTypes from 'prop-types'

function CardsFuncionarios({nome, email, profissao}) {

  
  return (
    <div >
      <div>
        <h3>Usuario: {nome}</h3>
      </div>
      <div>
        <p>E-mail: {email}</p>
      </div>
      <div>
        <p>Profissão: {profissao}</p>
      </div>
    </div>
  );
}

export default CardsFuncionarios;
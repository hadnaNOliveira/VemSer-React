function Form() {
  return (
    <>
      <form>
        <div>
        <label>Digite seu nome completo: </label>
        <input type="text" placeholder="Nome Completo" />
        </div>

        <div>
        <label>Digite seu email: </label>
        <input type="email" placeholder="E-mail" />
        </div>

        <div>
        <label>Qual o motivo do seu contato </label>
        <select name="contato" id="contato">
          <option value="1">HTML</option>
          <option value="2">JS</option>
          <option value="3">CSS</option>
        </select>
        </div>

        <div>
        <label>Digite sua mensagem </label>
        <textarea name="mensagem" id="mensagem" cols="30" rows="10"></textarea>
        </div>

        <button>Salvar</button>
      </form>

    </>

  );
}

export default Form;
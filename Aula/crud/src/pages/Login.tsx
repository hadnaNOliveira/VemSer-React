import { Formik, Field, Form, FormikHelpers } from 'formik';
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

interface Values {
  usuario: string;
  senha: string;
}

const Login = () => {
  const {handleLogin} = useContext<any>(AuthContext);
  return (
    <div>
    <h1>Login Cogumelo Shop</h1>
    <Formik
      initialValues={{
        usuario: '',
        senha: '',
      }}
      onSubmit={(
        values: Values,
        { setSubmitting }: FormikHelpers<Values>
      ) => {
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          handleLogin(values);
          setSubmitting(false);
        }, 500);
      }}
    >
      <Form>
        <div>
        <label htmlFor="usuario">Usuário</label>
        <Field id="usuario" name="usuario" placeholder="Digite o nome do usuário" />
        </div>
        <div>
        <label htmlFor="senha">Senha</label>
        <Field id="senha" type="password" name="senha" placeholder="Digite a senha" />
        </div>
        <button type="submit">Logar</button>
      </Form>
    </Formik>
  </div>
  )
}

export default Login;
import React from 'react';
import Titulo from '../Titulo';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';

const LoginEntrar = () => {
  const username = useForm();
  const password = useForm();

  const {fazerLogin} = React.useContext(UserContext)

  async function handleSubmit(e) {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      fazerLogin(username.value, password.value)
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <Titulo>Login</Titulo>
        <Input type="text" label="Usuário" {...username} />
        <Input type="password" label="Senha" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="perdeu">Perdeu a senha?</Link>
    </section>
  );
};

export default LoginEntrar;

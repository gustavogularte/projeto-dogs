import React from 'react';
import Titulo from '../Titulo';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import { Link } from 'react-router-dom';

const LoginEntrar = () => {
  return (
    <section>
      <form>
        <Titulo>Login</Titulo>
        <Input type="text" label="Usuário" />
        <Input type="password" label="Senha" />
        <Button>Entrar</Button>
      </form>
      <Link to="perdeu">Perdeu a senha?</Link>
    </section>
  );
};

export default LoginEntrar;

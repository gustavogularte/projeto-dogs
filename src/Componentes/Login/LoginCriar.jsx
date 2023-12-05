import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';

const LoginCriar = () => {
  return (
    <section className='animeLeft'>
      <form>
        <h1 className="titulo">Cadastre-se</h1>
        <Input label='Usuário'/>
        <Input label='Email'/>
        <Input label='Senha'/>
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCriar;

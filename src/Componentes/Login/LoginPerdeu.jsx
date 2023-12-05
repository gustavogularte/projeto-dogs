import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';

const LoginPerdeu = () => {
  return (
    <section className='animeLeft'>
      <form>
        <h1 className="titulo">Perdeu a senha?</h1>
        <Input label='Email / Usuário'/>
        <Button>Enviar Email</Button>
      </form>
    </section>
  );
};

export default LoginPerdeu;

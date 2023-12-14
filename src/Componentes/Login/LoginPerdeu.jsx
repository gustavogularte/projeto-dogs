import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { PERDEU_SENHA } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Head from '../Head';

const LoginPerdeu = () => {
  const login = useForm();
  const { data, loading, erro, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = PERDEU_SENHA({
      login: login.value,
      url: window.location.href.replace('perdeu', 'resetar'),
    });
    const { json } = await request(url, options);
  }

  return (
    <section className="animeLeft">
      <Head title='Perdeu a senha' description='Recupere sua senha perdida'/>
      <h1 className="titulo">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#44cc11' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" {...login} />
          <Button>Enviar Email</Button>
        </form>
      )}
    </section>
  );
};

export default LoginPerdeu;

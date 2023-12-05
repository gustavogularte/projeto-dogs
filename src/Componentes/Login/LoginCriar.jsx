import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { CRIAR_USER } from '../../api';
import useFetch from '../../Hooks/useFetch';
import { UserContext } from '../../UserContext';
import Erro from '../Forms/Erro';

const LoginCriar = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const {fazerLogin} = React.useContext(UserContext)
  const {request, loading, erro} = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = CRIAR_USER({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const {response} = await request(url, options);
    if (response.ok) fazerLogin(username.value, password.value)
  }

  return (
    <section className="animeLeft">
      <form onSubmit={handleSubmit}>
        <h1 className="titulo">Cadastre-se</h1>
        <Input label="Usuário" type="text" {...username} />
        <Input label="Email" type="email" {...email} />
        <Input label="Senha" type="password" {...password} />
        <Button>Cadastrar</Button>
        <Erro erro={erro}/>
      </form>
    </section>
  );
};

export default LoginCriar;

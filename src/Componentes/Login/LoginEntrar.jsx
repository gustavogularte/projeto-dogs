import React from 'react';
import Titulo from '../Titulo';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';

const LoginEntrar = () => {
  const username = useForm();
  const password = useForm();

  const { fazerLogin, erro, loading } = React.useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      fazerLogin(username.value, password.value);
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <Titulo>Login</Titulo>
        <Input type="text" label="Usuário" {...username} />
        <Input type="password" label="Senha" {...password} />
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {erro && <p>{erro}</p>}
      </form>
      <Link to="perdeu" className={styles.perdeuLink}>
        Perdeu a senha?
      </Link>
    </section>
  );
};

export default LoginEntrar;

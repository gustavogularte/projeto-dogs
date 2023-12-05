import React from 'react';
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
    <section className='animeLeft'>
      <form onSubmit={handleSubmit}>
        <h1 className="titulo">Login</h1>
        <Input type="text" label="Usuário" {...username} />
        <Input type="password" label="Senha" {...password} />
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {erro && <p className={styles.erro}>{erro}</p>}
      </form>
      <Link to="perdeu" className={styles.perdeuLink}>
        Perdeu a senha?
      </Link>
      <h2 className={styles.cadastrar + ' subtitulo'}>Cadastre-se</h2>
      <p>Ainda não possui conta? Cadastre-se no site.</p>
      <Link to="criar">
        <Button>Cadastro</Button>
      </Link>
    </section>
  );
};

export default LoginEntrar;

import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import { RESETAR_SENHA } from '../../api';
import Erro from '../Forms/Erro';
import { useNavigate } from 'react-router-dom';

const LoginResetar = () => {
  const { loading, erro, request } = useFetch();
  const password = useForm();
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setKey(params.get('key'));
    setLogin(params.get('login'));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (password.validate()) {
      const { url, options } = RESETAR_SENHA({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) {
        navigate('/login');
      }
    }
  }

  return (
    <section>
      <h1 className="titulo">Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova senha" type="password" {...password} />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Erro erro={erro} />
    </section>
  );
};

export default LoginResetar;

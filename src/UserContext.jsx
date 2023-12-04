import React from 'react';
import { LOGAR, PEGAR_TOKEN, VALIDAR_TOKEN } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [erro, setErro] = React.useState(null);
  const [login, setLogin] = React.useState(null);

  const navigate = useNavigate();

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setErro(null);
          setLoading(true);
          const { url, options } = VALIDAR_TOKEN(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('token inválido crl');
          await puxarUser(token);
        } catch (err) {
          logoutUser();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  async function puxarUser(token) {
    const { url, options } = LOGAR(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
    navigate('/conta');
  }

  async function fazerLogin(username, password) {
    try {
      setErro(null);
      setLoading(true);
      const { url, options } = PEGAR_TOKEN({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error('Dados inválidos');
      const { token } = await response.json();
      window.localStorage.setItem('token', token);
      await puxarUser(token);
    } catch (err) {
      setErro(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function logoutUser() {
    setData(null);
    setLoading(false);
    setErro(null);
    setLogin(false);
    window.localStorage.removeItem('token');
    navigate('login')
  }

  return (
    <UserContext.Provider
      value={{ fazerLogin, data, logoutUser, loading, erro, login }}
    >
      {children}
    </UserContext.Provider>
  );
};

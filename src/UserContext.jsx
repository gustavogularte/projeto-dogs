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

  const puxarUser = React.useCallback(async (token) => {
    const { url, options } = LOGAR(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }, []);

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
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  const logoutUser = React.useCallback(async () => {
    setData(null);
    setLoading(false);
    setErro(null);
    setLogin(false);
    window.localStorage.removeItem('token');
  }, []);

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setErro(null);
          setLoading(true);
          const { url, options } = VALIDAR_TOKEN(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('token inválido');
          await puxarUser(token);
        } catch (err) {
          logoutUser();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [logoutUser, puxarUser]);

  return (
    <UserContext.Provider
      value={{ fazerLogin, data, logoutUser, loading, erro, login }}
    >
      {children}
    </UserContext.Provider>
  );
};

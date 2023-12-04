import React from 'react';
import { LOGAR, PEGAR_TOKEN } from './api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);

  async function puxarUser(token) {
    const { url, options } = LOGAR(token);
    const response = await fetch(url, options);
    const json = await response.json();
  }

  async function fazerLogin(username, password) {
    console.log({ username, password });
    const { url, options } = PEGAR_TOKEN({ username, password });
    const response = await fetch(url, options);
    const json = await response.json();
    window.localStorage.setItem('token', json.token);
    puxarUser(json.token);
  }

  return (
    <UserContext.Provider value={{ fazerLogin }}>
      {children}
    </UserContext.Provider>
  );
};

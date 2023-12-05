import React from 'react';
import { NavLink } from 'react-router-dom';
import Conta from '../../Assets/feed.svg?react';
import Estatisticas from '../../Assets/estatisticas.svg?react';
import Postar from '../../Assets/adicionar.svg?react';
import styles from './UserHeader.module.css';
import { UserContext } from '../../UserContext';

const UserHeader = () => {
  const {logoutUser} = React.useContext(UserContext);

  return (
    <section className={styles.header}>
      <h1 className="titulo">Minha conta</h1>
      <nav className={styles.nav}>
        <li><NavLink to='/conta'><Conta/></NavLink></li>
        <li><NavLink to='/conta/estatisticas'><Estatisticas/></NavLink></li>
        <li><NavLink to='/conta/postar'><Postar/></NavLink></li>
        <button onClick={logoutUser}>Sair</button>
      </nav>
    </section>
  );
};

export default UserHeader;

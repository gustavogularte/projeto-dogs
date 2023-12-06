import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Conta from '../../Assets/feed.svg?react';
import Estatisticas from '../../Assets/estatisticas.svg?react';
import Postar from '../../Assets/adicionar.svg?react';
import Sair from '../../Assets/sair.svg?react';
import styles from './UserHeader.module.css';
import { UserContext } from '../../UserContext';

const UserHeader = () => {
  const { logoutUser } = React.useContext(UserContext);
  const [titulo, setTitulo] = React.useState('');
  const location = useLocation().pathname;
  const navigate = useNavigate();

  React.useEffect(() => {
    const mudarTitulo = () => {
      switch (location) {
        case '/conta':
          setTitulo('Minha conta');
          break;
        case '/conta/estatisticas':
          setTitulo('Estatísticas');
          break;
        case '/conta/postar':
          setTitulo('Poste sua foto');
      }
    };
    mudarTitulo();
  }, [location]);

  function handleLogout() {
    logoutUser();
    navigate('login');
  }

  return (
    <section className={styles.header}>
      <h1 className="titulo">{titulo}</h1>
      <nav className={styles.nav}>
        <li>
          <NavLink to="/conta" end>
            <Conta />
          </NavLink>
        </li>
        <li>
          <NavLink to="/conta/estatisticas">
            <Estatisticas />
          </NavLink>
        </li>
        <li>
          <NavLink to="/conta/postar">
            <Postar />
          </NavLink>
        </li>
        <button onClick={handleLogout}>
          <Sair />
        </button>
      </nav>
    </section>
  );
};

export default UserHeader;

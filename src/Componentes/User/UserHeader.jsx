import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Conta from '../../Assets/feed.svg?react';
import Estatisticas from '../../Assets/estatisticas.svg?react';
import Postar from '../../Assets/adicionar.svg?react';
import Sair from '../../Assets/sair.svg?react';
import styles from './UserHeader.module.css';
import { UserContext } from '../../UserContext';
import useMedia from '../../Hooks/useMedia';

const UserHeader = () => {
  const { logoutUser } = React.useContext(UserContext);
  const [titulo, setTitulo] = React.useState('');
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const mobile = useMedia('(max-width: 600px)');
  const [ativo, setAtivo] = React.useState(false);

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
    setAtivo(false)
  }, [location]);

  function handleLogout() {
    logoutUser();
    navigate('login');
  }

  function ativarMenu({target}) {
    setAtivo(!ativo)
    target.setAttribute('aria-expanded', !ativo)
    console.log(ativo)
  }

  return (
    <header className={styles.header}>
      <h1 className="titulo">{titulo}</h1>
      <nav>
        {mobile && (
          <button
            className={`${styles.mobileMenu} ${ativo ? styles.ativo : ''}`}
            type="button"
            aria-controls="menu"
            aria-expanded="false"
            aria-label="Abrir e fechar menu"
            onClick={ativarMenu}
          ></button>
        )}
        <ul className={`${mobile ? styles.navMobile : styles.nav} ${ativo ? styles.navAtivo : ''}`} id="menu">
          <li>
            <NavLink to="/conta" end>
              <Conta />
              {mobile && 'Minhas fotos'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/conta/estatisticas">
              <Estatisticas />
              {mobile && 'Estatísticas'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/conta/postar">
              <Postar />
              {mobile && 'Adicionar foto'}
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>
              <Sair />
              {mobile && 'Sair'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default UserHeader;

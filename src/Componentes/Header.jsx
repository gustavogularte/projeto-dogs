import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Dogs from '../Assets/dogs.svg?react';
import { UserContext } from '../UserContext';

const Header = () => {
  const { data, logoutUser } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={styles.nav + ' container'}>
        <ul>
          <li>
            <Link to="/">
              <Dogs />
            </Link>
          </li>
          <li>
            {data ? (
              <Link to="conta" className={styles.login}>
                {data.nome}
              </Link>
            ) : (
              <Link to="login" className={styles.login}>
                Login / Criar
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

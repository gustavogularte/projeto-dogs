import React from 'react';
import styles from './User.module.css';
import Feed from '../Feed/Feed';
import { UserContext } from '../../UserContext';

const UserConta = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className={styles.conta + ' animeLeft'}>
      <Feed user={data.id} />
    </section>
  );
};

export default UserConta;

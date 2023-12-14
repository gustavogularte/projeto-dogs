import React from 'react';
import styles from './Home.module.css';
import Feed from './Feed/Feed';
import Head from './Head';

const Home = () => {
  return (
    <main className={styles.home}>
      <Head title='Home' description='Rede social para cachorro'/>
      <Feed />
    </main>
  );
};

export default Home;

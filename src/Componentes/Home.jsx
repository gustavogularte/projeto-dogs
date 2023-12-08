import React from 'react';
import styles from './Home.module.css';
import Feed from './Feed/Feed';

const Home = () => {
  return (
    <main className={styles.home}>
      <Feed />
    </main>
  );
};

export default Home;

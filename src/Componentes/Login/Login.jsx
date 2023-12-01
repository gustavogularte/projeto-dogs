import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginEntrar from './LoginEntrar';
import LoginCriar from './LoginCriar';
import LoginResetar from './LoginResetar';
import LoginPerdeu from './LoginPerdeu';
import styles from './Login.module.css';

const Login = () => {
  return (
    <main>
      <section className={StyleSheet.loginContainer}>
        <Routes>
          <Route path="/" element={<LoginEntrar />} />
          <Route path="criar" element={<LoginCriar />} />
          <Route path="resetar" element={<LoginResetar />} />
          <Route path="perdeu" element={<LoginPerdeu />} />
        </Routes>
      </section>
    </main>
  );
};

export default Login;

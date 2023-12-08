import React from 'react';
import styles from './FeedFoto.module.css';

const FeedFoto = ({ setModalFoto, foto }) => {
  function abrirModal() {
    setModalFoto(foto);
  }
  return (
    <li className={styles.foto} onClick={abrirModal}>
      <img src={foto.src} alt={foto.title} />
      <span>{foto.acessos}</span>
    </li>
  );
};

export default FeedFoto;

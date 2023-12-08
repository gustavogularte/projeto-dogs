import React from 'react';
import styles from './FotoConteudo.module.css';
import { Link } from 'react-router-dom';
import FotoComentarios from './FotoComentarios';

const FotoConteudo = ({ data }) => {
  console.log(data);
  const { comments, photo } = data;

  return (
    <article className={styles.modal}>
      <section>
        <img src={photo.src} alt={photo.title} />
      </section>
      <section className={styles.modalConteudo}>
        <section className={styles.modalInfos}>
          <span className={styles.modalDetalhes}>
            <Link to={`perfil/${photo.author}`}>@{photo.author}</Link>
            <p>{photo.acessos}</p>
          </span>
          <h1 className={`${styles.modalTitulo} titulo`}><Link to={`foto/${photo.id}`}>{photo.title}</Link></h1>
          <ul className={styles.modalCaracteristicas}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
          <FotoComentarios id={photo.id} comentarios={comments}/>
        </section>
      </section>
    </article>
  );
};

export default FotoConteudo;

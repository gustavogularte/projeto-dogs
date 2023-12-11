import React from 'react';
import styles from './FotoConteudo.module.css';
import { Link } from 'react-router-dom';
import FotoComentarios from './FotoComentarios';
import { UserContext } from '../../UserContext';
import FotoDeletar from './FotoDeletar';
import Imagem from '../Helper/Imagem';

const FotoConteudo = ({ data }) => {
  const { comments, photo } = data;
  const dados = React.useContext(UserContext);

  return (
    <article className={styles.modal}>
      <Imagem src={photo.src} alt={photo.title}/>
      <section className={styles.modalConteudo}>
        <section className={styles.modalInfos}>
          <span className={styles.modalDetalhes}>
            {dados.data.nome === photo.author ? (
              <FotoDeletar id={photo.id} />
            ) : (
              <Link to={`perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <p>{photo.acessos}</p>
          </span>
          <h1 className={`${styles.modalTitulo} titulo`}>
            <Link to={`foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.modalCaracteristicas}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </section>
        <FotoComentarios id={photo.id} comentarios={comments} />
      </section>
    </article>
  );
};

export default FotoConteudo;

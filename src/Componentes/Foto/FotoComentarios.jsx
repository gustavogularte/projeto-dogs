import React from 'react';
import styles from './FotoComentarios.module.css';
import Input from '../Forms/Input';
import FotoComentarioForm from './FotoComentarioForm';

const FotoComentarios = ({ comentarios, id }) => {
  return (
    <>
      <ul className={styles.comentariosLista}>
        {comentarios.map(({ comment_author, comment_content, comment_ID }) => (
          <li className={styles.comentario} key={comment_ID}>
            <p>
              <span>{comment_author}: </span>
              {comment_content}
            </p>
          </li>
        ))}
      </ul>
      <FotoComentarioForm />
    </>
  );
};

export default FotoComentarios;

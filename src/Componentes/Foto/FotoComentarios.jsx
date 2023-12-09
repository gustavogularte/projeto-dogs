import React from 'react';
import styles from './FotoComentarios.module.css';
import Input from '../Forms/Input';
import FotoComentarioForm from './FotoComentarioForm';

const FotoComentarios = ({ comentarios, id }) => {
  const [comments, setComments] = React.useState(() => comentarios)

  return (
    <>
      <ul className={styles.comentariosLista}>
        {comments.map(({ comment_author, comment_content, comment_ID }) => (
          <li className={styles.comentario} key={comment_ID}>
            <p>
              <span>{comment_author}: </span>
              {comment_content}
            </p>
          </li>
        ))}
      </ul>
      <FotoComentarioForm id={id} setComments={setComments}/>
    </>
  );
};

export default FotoComentarios;

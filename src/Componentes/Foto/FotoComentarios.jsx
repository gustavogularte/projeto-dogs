import React from 'react';
import styles from './FotoComentarios.module.css';
import FotoComentarioForm from './FotoComentarioForm';
import { UserContext } from '../../UserContext';

const FotoComentarios = ({ comentarios, id }) => {
  const [comments, setComments] = React.useState(comentarios);
  const lista = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    lista.current.scrollTop = lista.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul className={styles.comentariosLista} ref={lista}>
        {comments.map(({ comment_author, comment_content, comment_ID }) => (
          <li className={styles.comentario} key={comment_ID}>
            <p>
              <span>{comment_author}: </span>
              {comment_content}
            </p>
          </li>
        ))}
      </ul>
      {login && <FotoComentarioForm id={id} setComments={setComments} />}
    </>
  );
};

export default FotoComentarios;

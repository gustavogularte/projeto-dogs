import React from 'react';
import styles from './FotoComentarioForm.module.css';
import Input from '../Forms/Input';
import Enviar from '../../Assets/enviar.svg?react';
import { POSTAR_COMENTARIO } from '../../api';
import useFetch from '../../Hooks/useFetch';

const FotoComentarioForm = ({ id, setComments }) => {
  const { request } = useFetch();
  const [comment, setComment] = React.useState('');

  async function enviarComentario(e) {
    e.preventDefault();

    const token = window.localStorage.getItem('token');
    if (!comment) return false
    const { url, options } = POSTAR_COMENTARIO(id, { comment }, token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form className={styles.comentarioForm} onSubmit={enviarComentario}>
      <Input
        type="text"
        placeholder="Comente..."
        onChange={({ target }) => setComment(target.value)}
        value={comment}
      />
      <button
        aria-label="Enviar comentário"
        className={styles.comentarioEnviar}
      >
        <Enviar />
      </button>
    </form>
  );
};

export default FotoComentarioForm;

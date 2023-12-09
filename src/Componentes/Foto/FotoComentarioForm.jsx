import React from 'react';
import styles from './FotoComentarioForm.module.css';
import Input from '../Forms/Input';
import Enviar from '../../Assets/enviar.svg?react'

const FotoComentarioForm = () => {
  function enviarComentario(e) {
    e.preventDefault();
  }

  return (
    <form className={styles.comentarioForm} onSubmit={enviarComentario}>
      <Input type="text" placeholder="Comente..."/>
      <button
        aria-label="Enviar comentário"
        className={styles.comentarioEnviar}
      ><Enviar/></button>
    </form>
  );
};

export default FotoComentarioForm;

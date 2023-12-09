import React from 'react';
import styles from './FotoDeletar.module.css';
import { DELETAR_FOTO } from '../../api';
import useFetch from '../../Hooks/useFetch';

const FotoDeletar = ({ id }) => {
  const { request } = useFetch();

  async function deletarFoto() {
    const confirmar = window.confirm('Tem certeza que deseja deletar?');
    if (confirmar) {
      const token = window.localStorage.getItem('token');
      const { url, options } = DELETAR_FOTO(id, token);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <button className={styles.deletar} onClick={deletarFoto}>
      Deletar
    </button>
  );
};

export default FotoDeletar;

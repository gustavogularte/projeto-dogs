import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { PEGAR_FOTO } from '../../api';
import Erro from '../Forms/Erro';
import Loading from '../Helper/Loading';
import FotoConteudo from '../Foto/FotoConteudo';
import styles from './FeedModal.module.css';

const FeedModal = ({ foto }) => {
  const { data, loading, erro, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PEGAR_FOTO(foto.id);
    request(url, options);
  }, [foto, request]);

  return (
    <div className={styles.modalContainer}>
      {erro && <Erro erro={erro} />}
      {loading && <Loading />}
      {data && <FotoConteudo data={data} />}
    </div>
  );
};

export default FeedModal;

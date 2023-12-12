import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { PEGAR_FOTOS } from '../../api';
import FeedFoto from './FeedFoto';
import styles from './FeedFotos.module.css';
import Loading from '../Helper/Loading';

const FeedFotos = ({ setModalFoto, user }) => {
  const { data, loading, erro, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PEGAR_FOTOS({ page: 1, total: 6, user });
    request(url, options);
  }, [request]);

  if (erro) return <section>{erro}</section>;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={styles.feed}>
        {data.map((foto) => (
          <FeedFoto key={foto.id} setModalFoto={setModalFoto} foto={foto} />
        ))}
      </ul>
    );
  else return null;
};

export default FeedFotos;

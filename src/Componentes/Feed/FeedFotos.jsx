import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { PEGAR_FOTO } from '../../api';
import FeedFoto from './FeedFoto';
import styles from './FeedFotos.module.css';

const FeedFotos = () => {
  const { data, loading, erro, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PEGAR_FOTO({ page: 1, total: 6, user: 0 });
    request(url, options);
  }, [request]);

  if (erro) return <section>{erro}</section>;
  if (loading) return <section>Loading...</section>;
  if (data)
    return (
      <ul className={styles.feed}>
        {data.map((foto) => (
          <FeedFoto key={foto.id} {...foto} />
        ))}
      </ul>
    );
  else return null;
};

export default FeedFotos;

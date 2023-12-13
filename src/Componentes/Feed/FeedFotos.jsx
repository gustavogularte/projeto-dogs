import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { PEGAR_FOTOS } from '../../api';
import FeedFoto from './FeedFoto';
import styles from './FeedFotos.module.css';
import Loading from '../Helper/Loading';

const FeedFotos = ({ setModalFoto, user, page, setInfinito }) => {
  const { data, loading, erro, request } = useFetch();

  React.useEffect(() => {
    async function fetchFotos() {
      let total = 6;
      const { url, options } = PEGAR_FOTOS({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInfinito(false);
      }
    }
    fetchFotos();
  }, [request, user, page, setInfinito]);

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

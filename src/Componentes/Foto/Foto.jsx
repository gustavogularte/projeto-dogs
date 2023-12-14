import React from 'react';
import FotoConteudo from './FotoConteudo';
import FeedModal from '../Feed/FeedModal';
import useFetch from '../../Hooks/useFetch';
import { PEGAR_FOTO } from '../../api';
import { useParams } from 'react-router-dom';
import Erro from '../Forms/Erro';
import Loading from '../Helper/Loading';
import styles from './Foto.module.css';
import Head from '../Head';

const Foto = () => {
  const { data, loading, erro, request } = useFetch();
  const { id } = useParams();

  React.useEffect(() => {
    const { url, options } = PEGAR_FOTO(id);
    request(url, options);
  }, [request, id]);

  return (
    <main className={`${styles.foto} container grid`}>
      <Head title='Foto' description='Publicação Dogs'/>
      {erro && <Erro erro={erro} />}
      {loading && <Loading />}
      {data && <FotoConteudo data={data} />}
    </main>
  );
};

export default Foto;

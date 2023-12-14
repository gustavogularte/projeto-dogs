import React from 'react';
import Head from '../Head';
import useFetch from '../../Hooks/useFetch';
import { ESTATISTICAS } from '../../api';
import UserEstatisticasGraficos from './UserEstatisticasGraficos';

const UserEstatisticas = () => {
  const { data, loading, erro, request } = useFetch();

  React.useEffect(() => {
    async function fetchStats() {
      const token = window.localStorage.getItem('token');
      const { url, options } = ESTATISTICAS(token);
      await request(url, options);
    }
    fetchStats();
  }, [request]);

  return (
    <>
      <Head title="Estatísticas" description="Estatísticas do perfil" />
      {data && <UserEstatisticasGraficos data={data} />}
    </>
  );
};

export default UserEstatisticas;

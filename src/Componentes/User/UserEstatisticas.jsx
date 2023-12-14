import React from 'react';
import Head from '../Head';
import useFetch from '../../Hooks/useFetch';
import { ESTATISTICAS } from '../../api';
const UserEstatisticasGraficos = React.lazy(() => import('./UserEstatisticasGraficos'))

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
    <React.Suspense fallback={<div></div>}>
      <Head title="Estatísticas" description="Estatísticas do perfil" />
      {data && <UserEstatisticasGraficos data={data} />}
    </React.Suspense>
  );
};

export default UserEstatisticas;

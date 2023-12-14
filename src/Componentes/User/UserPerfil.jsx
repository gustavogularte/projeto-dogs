import React from 'react';
import { useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';
import Head from '../Head';

const UserPerfil = () => {
  const { user } = useParams();

  return (
    <>
      <Head title={user} description="Perfil do usuário" />
      <Feed user={user} />
    </>
  );
};

export default UserPerfil;

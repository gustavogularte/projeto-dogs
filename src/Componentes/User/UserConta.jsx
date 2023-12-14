import React from 'react';
import Feed from '../Feed/Feed';
import { UserContext } from '../../UserContext';
import Head from '../Head';

const UserConta = () => {
  const { data } = React.useContext(UserContext);

  return (
    <>
      <Head title='Minha conta' description='Minha conta Dogs'/>
      <Feed user={data.id} />
    </>
  );
};

export default UserConta;

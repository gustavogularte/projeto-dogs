import React from 'react';
import Feed from '../Feed/Feed';
import { UserContext } from '../../UserContext';

const UserConta = () => {
  const { data } = React.useContext(UserContext);

  return <Feed user={data.id} />;
};

export default UserConta;

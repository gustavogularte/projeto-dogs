import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import UserEstatisticas from './UserEstatisticas';
import UserPostar from './UserPostar';
import UserConta from './UserConta';

const User = () => {
  return (
    <main className='container'>
      <UserHeader />
      <Routes>
        <Route path="/" element={<UserConta />} />
        <Route path="estatisticas" element={<UserEstatisticas />} />
        <Route path="postar" element={<UserPostar />} />
      </Routes>
    </main>
  );
};

export default User;

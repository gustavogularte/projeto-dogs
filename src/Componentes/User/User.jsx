import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import UserEstatisticas from './UserEstatisticas';
import UserPostar from './UserPostar';
import UserConta from './UserConta';
import NotFound from '../NotFound';

const User = () => {
  return (
    <main className="grid container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<UserConta />} />
        <Route path="estatisticas" element={<UserEstatisticas />} />
        <Route path="postar" element={<UserPostar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default User;

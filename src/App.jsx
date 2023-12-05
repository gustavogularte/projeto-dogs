import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Componentes/Header';
import Home from './Componentes/Home';
import Footer from './Componentes/Footer';
import Login from './Componentes/Login/Login';
import { UserStorage } from './UserContext';
import ProtectedRoute from './Componentes/Helper/ProtectedRoute';
import User from './Componentes/User/User';

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route
            path="conta/*"
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;

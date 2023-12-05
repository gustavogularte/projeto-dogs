import React from 'react';

const Erro = ({ erro }) => {
  if (!erro) return null;
  return <p className="erro">{erro}</p>;
};

export default Erro;

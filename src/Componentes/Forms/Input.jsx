import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, value, onChange, erro, onBlur}) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {erro && <p className={styles.erro}>{erro}</p>}
    </label>
  );
};

export default Input;

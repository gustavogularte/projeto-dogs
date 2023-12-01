import React from 'react';
import PropTypes from 'prop-types';
import styles from './Titulo.module.css';

const Titulo = (props) => {
  return <props.nivel className={styles.titulo}>{props.children}</props.nivel>;
};

Titulo.defaultProps = {
  nivel: 'h1',
};

export default Titulo;

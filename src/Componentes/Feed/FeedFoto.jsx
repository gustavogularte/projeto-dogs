import React from 'react';
import styles from './FeedFoto.module.css'

const FeedFoto = ({src, title, acessos}) => {
  return (
    <li className={styles.foto}>
      <img src={src} alt={title}/>
      <span>{acessos}</span>
    </li>
  )
}

export default FeedFoto

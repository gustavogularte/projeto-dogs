import React from 'react';
import styles from './Imagem.module.css';

const Imagem = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} alt={alt} {...props} className={styles.img} />
    </div>
  );
};

export default Imagem;

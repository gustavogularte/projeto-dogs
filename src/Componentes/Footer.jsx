import styles from './Footer.module.css';
import Dogs from '../Assets/dogs-footer.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to='/'><img src={Dogs} alt="Logo Dogs" /></Link>
      <p><a href="https://www.origamid.com" target="_blank" rel='noreferrer'>Origamid</a> © Projeto feito por <a href="https://github.com/gustavogularte" target="_blank" rel='noreferrer'>Gustavo Gularte Arend</a>.</p>
    </footer>
  )
}

export default Footer

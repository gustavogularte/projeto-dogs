import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Dogs from '../Assets/dogs.svg?react'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'><Dogs/></Link></li>
          <li><Link to='login'>Login / Criar</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

import React from 'react'
import styles from './Input.module.css'

const Input = ({label, type, value, setValue, ...props}) => {
  return (
    <label className={styles.label}>
      {label}
      <input className={styles.input} type={type} value={value} onChange={setValue} {...props}/>
      <p className={styles.erro}>Erro</p>
    </label>
  )
}

export default Input

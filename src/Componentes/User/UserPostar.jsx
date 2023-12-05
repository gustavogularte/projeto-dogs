import React from 'react'
import Input from '../Forms/Input'
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';

const UserPostar = () => {
  const nome = useForm();
  const peso = useForm();
  const idaide = useForm();

  return (
    <form>
      <Input label='Nome' type='text' />
      <Input label='Peso' type='text' />
      <Input label='Idade' type='text' />
      <input type='file' />
      <Button>Enviar</Button>
    </form>
  )
}

export default UserPostar

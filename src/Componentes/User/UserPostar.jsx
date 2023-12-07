import React from 'react';
import Input from '../Forms/Input';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Button from '../Forms/Button';
import Erro from '../Forms/Erro';
import styles from './UserPostar.module.css';
import { POSTAR_FOTO } from '../../api';
import { useNavigate } from 'react-router-dom';

const UserPostar = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const { erro, loading, data, request } = useFetch();
  const navigate = useNavigate()

  function handleImgChange({ target }) {
    setImg({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0]),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', nome.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = POSTAR_FOTO(formData, token);
    request(url, options);
  }

  React.useEffect(() => {
    if (data) navigate('/conta')
  }, [navigate, data])

  return (
    <section className={styles.postar + ' animeLeft'}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" {...nome} />
        <Input label="Peso" type="text" {...peso} />
        <Input label="Idade" type="text" {...idade} />
        <input
          type="file"
          name="img"
          id="img"
          className={styles.img}
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Erro erro={erro}/>
      </form>
      <div>
        <section
          className={styles.imgPreview}
          style={{ backgroundImage: `url(${img.preview})` }}
        ></section>
      </div>
    </section>
  );
};

export default UserPostar;

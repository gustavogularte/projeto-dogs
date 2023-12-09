import React from 'react';

const types = {
  email: {
    regex:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido',
  },
  number: {
    regex: /^\d+$/,
    message: 'Apenas números são aceitos'
  }
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [erro, setErro] = React.useState(null);

  function validate() {
    if (type === false) return true;
    if (value.length === 0) {
      setErro('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setErro(types[type].message);
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (erro) validate();
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    erro,
    validate: () => validate(),
    onBlur: () => validate(),
  };
};

export default useForm;

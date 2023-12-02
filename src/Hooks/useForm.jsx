import React from 'react';

const useForm = () => {
  const [value, setValue] = React.useState('');
  const [erro, setErro] = React.useState(null);

  function validate() {
    if (value.length === 0) {
      setErro('Preencha um valor');
      return false
    } else {
      setErro(null);
      return true
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

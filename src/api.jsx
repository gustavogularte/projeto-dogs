export const API_URL = 'https://dogsapi.origamid.dev/json';

export function PEGAR_TOKEN(body) {
  return {
    url: API_URL + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function LOGAR(token) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function VALIDAR_TOKEN(token) {
  return {
    url: API_URL + '/jwt-auth/v1/token/validate',
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function CRIAR_USER(body) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function POSTAR_FOTO(formData, token) {
  return {
    url: API_URL + '/api/photo',
    options: {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    },
  };
}

export function PEGAR_FOTOS({page, total, user}) {
  return {
    url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function PEGAR_FOTO(id) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  };
}

export function DELETAR_FOTO(id, token) {
  return {
    url: `${API_URL}/api/photo/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}

export function POSTAR_COMENTARIO(id, body, token) {
  return {
    url: `${API_URL}/api/comment/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    },
  };
}

export function PERDEU_SENHA(body) {
  return {
    url: `${API_URL}/api/password/lost`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function RESETAR_SENHA(body) {
  return {
    url: `${API_URL}/api/password/reset`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function ESTATISTICAS(token) {
  return {
    url: `${API_URL}/api/stats`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  };
}
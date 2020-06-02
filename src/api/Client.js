import { create } from 'apisauce';

let token = null;

const client = create({
  baseURL: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    'x-rapidapi-key': 'f659a758dcmsh652366468a9027bp181729jsnf2341b4c7e20',
    useQueryString: true,
  },
});

export function setToken(newToken) {
  token = newToken;
}

/**
 * Sends HTTP request
 */
export function request(method, path, params = {}, customHeaders = {}) {
  const headers = token ? { Authorization: `Bearer ${token}` } : null;

  return client[method](path, params, {
    headers: {
      ...headers,
      ...customHeaders,
    },
  }).then(response => {
    if (response.ok) {
      return Promise.resolve(response.data);
    } else {
      const { message, title, ...others } = response.data;
      return Promise.reject({
        error: message,
        errors: [],
        ...others,
        status: response.status,
      });
    }
  });
}

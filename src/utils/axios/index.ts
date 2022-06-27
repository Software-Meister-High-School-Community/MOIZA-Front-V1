import axios, { AxiosError } from 'axios';

const instance = axios.create({
  baseURL: 'https://server.mo1za.com',
  timeout: 10000,
});

instance.interceptors.request.use(
  async function (config) {
    const accessToken = localStorage.getItem('access_token');
    accessToken &&
      (config.headers = {
        Authorization: `Bearer ${accessToken}`,
      });
    // : null;
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async err => {
    if ((axios.isAxiosError(err) as any) && err.response) {
      const { config, response } = err;
      if (response.data.status === 401 && localStorage.getItem('refresh_token')) {
        try {
          const res = await axios({
            method: 'patch',
            url: 'https://server.mo1za.com/auth/tokens',
            headers: {
              'Refresh-Token': `Bearer ${localStorage.getItem('refresh_token')}`,
            },
          });

          const { access_token, refresh_token } = res.data;
          localStorage.setItem('access_token', access_token);
          localStorage.setItem('refresh_token', refresh_token);
          if (config.headers) config.headers.Authorization = `Bearer ${access_token}`;
          return axios(config);
        } catch (err: any) {
          if (err.response.data.status === 401 || err.response.data.status === 404) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('auto_login');
          }
        }
      }
    }
  },
);

export default instance;

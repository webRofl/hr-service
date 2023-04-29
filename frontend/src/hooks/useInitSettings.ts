import axios from 'axios';
import useAuth from './useAuth';

const useInitSettings = () => {
  const { setHeaders } = useAuth();

  const setDefaultAxios = () => {
    // change link if change env
    axios.defaults.baseURL = 'http://localhost:8000/api/v1/';

    axios.interceptors.response.use(null, (error) => {
      if (error.response.status === 403) {
        setHeaders();
      }

      return Promise.reject(error);
    });
  };

  const setSettings = () => {
    setHeaders();
    setDefaultAxios();
  };

  return {
    setSettings,
  };
};

export default useInitSettings;

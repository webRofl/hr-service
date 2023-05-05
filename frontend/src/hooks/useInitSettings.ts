import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';

const useInitSettings = () => {
  const { setHeaders } = useAuth();

  const setDefaultAxios = () => {
    // change link if change env
    axios.defaults.baseURL = 'http://localhost/api/v1/';

    axios.interceptors.response.use(null, (error) => {
      if (error.response.status === 403) {
        setHeaders();
      }

      return Promise.reject(error);
    });
  };

  useEffect(() => {
    setHeaders();
    setDefaultAxios();
  }, []);
};

export default useInitSettings;

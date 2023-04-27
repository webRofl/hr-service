import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';
// import { GlobalENV } from '@/types';

export const initSettings = () => {
  // change link if change env
  axios.defaults.baseURL = 'http://localhost/api/v1/';

  const queryClient = new QueryClient();

  return {
    queryClient,
  };
};

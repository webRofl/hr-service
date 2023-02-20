import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { GlobalENV } from '@/types';

export const initSettings = () => {
  axios.defaults.baseURL = GlobalENV.FQDN_API;

  const queryClient = new QueryClient();

  return {
    queryClient,
  };
};

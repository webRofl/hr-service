import { QueryClient } from '@tanstack/react-query';

export const initSettings = () => {
  const queryClient = new QueryClient();

  return {
    queryClient,
  };
};

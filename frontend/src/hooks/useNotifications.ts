import { TypeOptions, toast } from 'react-toastify';

interface CreateToastParams {
  duration?: number;
  variant?: TypeOptions;
}

type CreateToast = (message: string, params?: CreateToastParams) => void;

const useNotifications = () => {
  const createToast: CreateToast = (message, params) => {
    const toastProps = {
      position: 'top-right',
      autoClose: params?.duration ?? 7000,
      closeOnClick: true,
      theme: 'dark',
    } as const;

    if (params?.variant && params.variant !== 'default') {
      return toast[params?.variant](message, toastProps);
    }

    return toast(message, toastProps);
  };

  return {
    createToast,
  };
};

export default useNotifications;

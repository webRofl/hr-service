import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { GlobalENV } from '@/types';
import { useAuthState, useLocalStorageState, useProfileState } from '@/store';
import { usersEmployerRead } from '@/store/api/orvalGeneration/users/users';

/* eslint-disable no-console */
const useWebSocket = () => {
  const { accessToken } = useAuthState(({ accessToken }) => ({ accessToken }));
  const { userId } = useLocalStorageState(({ userId }) => ({ userId }));
  const { setProfile } = useProfileState(({ setProfile }) => ({ setProfile }));
  const { profileType } = useAuthState(({ profileType }) => ({ profileType }));

  const onMessage = async (message: MessageEvent) => {
    const profile = (await usersEmployerRead(userId)).data;
    setProfile(profile);
    toast(JSON.parse(message.data).message, {
      position: 'top-right',
      autoClose: 7000,
      closeOnClick: true,
      theme: 'dark',
    });
  };

  useEffect(() => {
    if (profileType === 'employee') {
      return;
    }

    if (accessToken) {
      const socket = new WebSocket(`${GlobalENV.FQDN_BACKEND_WS}notifications`, [
        'Token',
        accessToken!,
      ]);

      socket.onmessage = onMessage;

      // eslint-disable-next-line consistent-return
      return () => {
        socket.close();
      };
    }
  }, [accessToken]);
};

export default useWebSocket;

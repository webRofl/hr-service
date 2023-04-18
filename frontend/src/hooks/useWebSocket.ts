import { useEffect } from 'react';
import { GlobalENV } from '@/types';
import { useAuthState, useLocalStorageState, useProfileState } from '@/store';
import { usersEmployerGetRead } from '@/store/api/orvalGeneration/users/users';
import useNotifications from './useNotifications';

/* eslint-disable no-console */
const useWebSocket = () => {
  const { createToast } = useNotifications();
  const { accessToken } = useAuthState(({ accessToken }) => ({ accessToken }));
  const { userId, setResponsesQuantity } = useLocalStorageState(
    ({ userId, setResponsesQuantity }) => ({
      userId,
      setResponsesQuantity,
    }),
  );
  const { setProfile } = useProfileState(({ setProfile }) => ({ setProfile }));
  const { profileType } = useAuthState(({ profileType }) => ({ profileType }));

  const onMessage = async (message: MessageEvent) => {
    const profile = (await usersEmployerGetRead(userId)).data;
    setProfile(profile);
    if (profile?.responses) {
      setResponsesQuantity(profile.responses.length);
    }

    createToast(JSON.parse(message.data).message);
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

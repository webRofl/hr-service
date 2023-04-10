import { useEffect } from 'react';
import { GlobalENV } from '@/types';
import { useAuthState } from '@/store';

/* eslint-disable no-console */
const useWebSocket = () => {
  const { accessToken } = useAuthState(({ accessToken }) => ({ accessToken }));

  const onConnect = () => {
    console.log('CONNECT');
  };

  const onConnectError = () => {
    console.log('CONNECT_ERROR');
  };

  const onMessage = (message: string) => {
    console.log(JSON.parse(message.data));
  };

  const onDisconnect = () => {
    console.log('DISCONNECT');
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (accessToken) {
      const socket = new WebSocket(`${GlobalENV.FQDN_BACKEND_WS}notifications`, [
        'Token',
        accessToken!,
      ]);

      socket.onopen = onConnect;
      socket.onerror = onConnectError;
      socket.onmessage = onMessage;
      socket.onclose = onDisconnect;

      return () => {
        socket.close();
      };
    }
  }, [accessToken]);
};

export default useWebSocket;

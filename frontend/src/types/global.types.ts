// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const getEnvValue = (key: string): string => {
  return import.meta.env[key] || '';
};

export const GlobalENV = {
  FQDN_BACKEND: getEnvValue('VITE_FQDN_BACKEND'),
  FQDN_FRONTEND: getEnvValue('VITE_FQDN_FRONTEND'),
  NODE_ENV: getEnvValue('VITE_NODE_ENV'),
};

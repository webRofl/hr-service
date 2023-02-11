// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const getEnvValue = (key: string): string => {
  try {
    return process.env[key] || '';
  } catch {
    return import.meta.env[key] || '';
  }
};

export const GlobalENV = {
  FQDN_API: getEnvValue('VITE_FQDN_API'),
  FQDN_FRONTEND: getEnvValue('VITE_FQDN_FRONTEND'),
  NODE_ENV: getEnvValue('VITE_NODE_ENV'),
};

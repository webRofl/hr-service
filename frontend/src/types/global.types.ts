const getEnvValue = (key: string): string => {
  try {
    return process.env[key] ?? '';
  } catch {
    return import.meta.env[key] ?? '';
  }
};

export const GlobalENV = {
  FQDN_API: getEnvValue('VITE_FQDN_API'),
  FQDN_FRONTEND: getEnvValue('VITE_FQDN_FRONTEND'),
  FQDN_BACKEND: getEnvValue('VITE_FQDN_BACKEND'),
  NODE_ENV: getEnvValue('VITE_NODE_ENV'),
};

import { GlobalENV } from '../types/global.types';

const config = {
  schemaFile: 'http:localhost:8000/api/v1/swagger.json',
  apiFile: './services/projects.service.base.ts',
  outputFile: './services/projects.service.generated.ts',
  hooks: true,
};

export default config;

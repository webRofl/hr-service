import type { ConfigFile } from '@rtk-query/codegen-openapi';
import { GlobalENV } from '@/types';

const config: ConfigFile = {
  schemaFile: `${GlobalENV.FQDN_BACKEND}/api/v1/swagger.json`,
  apiFile: './src/store/services/projects.service.base.ts',
  outputFile: './src/store/services/projects.service.generated.ts',
  hooks: true,
};

export default config;

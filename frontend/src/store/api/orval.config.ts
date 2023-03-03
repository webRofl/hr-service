const config = {
  apiStore: {
    output: {
      mode: 'tags-split',
      target: './orvalGeneration/apiStore.ts',
      schemas: './orvalGeneration/models',
      client: 'react-query',
      mock: false,
    },
    input: {
      target: './swagger.json',
    },
    hooks: {
      afterAllFilesWrite: ['prettier --write src/**/orvalGeneration/**/*.{ts,tsx}'],
    },
  },
};

export default config;

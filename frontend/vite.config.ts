/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import dns from 'dns';
import path from 'path';
import viteCompression from 'vite-plugin-compression';
// import { dependencies } from './package.json';

dns.setDefaultResultOrder('verbatim');

// const renderChunks = (deps: Record<string, string>) => {
//   const chunks = {};
//   Object.keys(deps).forEach((key) => {
//     if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
//     chunks[key] = [key];
//   });
//   return chunks;
// };

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    viteCompression({
      algorithm: 'gzip',
      deleteOriginFile: true,
      filter: (file) => !file.match(/index.html/),
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/components'),
      types: path.resolve(__dirname, './src/types'),
      assets: path.resolve(__dirname, './src/assets'),
      utils: path.resolve(__dirname, './src/utils'),
      store: path.resolve(__dirname, './src/store'),
      hooks: path.resolve(__dirname, './src/hooks'),
    },
  },
  // build: {
  //   sourcemap: false,
  //   rollupOptions: {
  //     external: ['fsevents'],
  //     output: {
  //       manualChunks: {
  //         ...renderChunks(dependencies),
  //       },
  //     },
  //   },
  // },
});

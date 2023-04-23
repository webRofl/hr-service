/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import { pathsToModuleNameMapper } from 'ts-jest';
import type { Config } from 'jest';
import { compilerOptions } from './tsconfig.json';

export default {
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.svg$': '<rootDir>/jest/svgTransform.ts',
    // '^.+\\.css$': 'jest-transform-css',
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        // diagnostics: {
        //   ignoreCodes: [1343],
        // },
        diagnostics: false,
        astTransformers: {
          before: [
            {
              path: 'node_modules/ts-jest-mock-import-meta',
              options: {
                metaObjectReplacement: {
                  VITE_FQDN_API: process.env.VITE_FQDN_API ?? '',
                  VITE_FQDN_FRONTEND: process.env.VITE_FQDN_FRONTEND ?? '',
                  VITE_FQDN_BACKEND_HTTP: process.env.VITE_FQDN_BACKEND_HTTP ?? '',
                  VITE_FQDN_BACKEND_WS: process.env.VITE_FQDN_BACKEND_WS ?? '',
                  VITE_NODE_ENV: process.env.VITE_NODE_ENV ?? '',
                  VITE_JWT_ACCESS_TTL: process.env.VITE_JWT_ACCESS_TTL ?? '',
                },
              },
            },
          ],
        },
      },
    ],
  },
  roots: ['<rootDir>'],
  preset: 'ts-jest',
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
    '\\.svg$': '<rootDir>/__mocks__/svg.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  modulePaths: ['<rootDir>'],
} as Config;

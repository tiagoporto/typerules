import eslintNextPlugin from '@next/eslint-plugin-next'
import tpConfig from '@tiagoporto/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['old/', 'public/index.html'] },
  ...tpConfig.configs.react,
  eslintNextPlugin.configs.recommended,
  eslintNextPlugin.configs['core-web-vitals'],
  {
    files: ['**/*.tsx'],
    rules: {
      'unicorn/filename-case': [
        'error', { case: 'pascalCase', ignore: ['page.tsx', 'layout.tsx'] },
      ],
    },
  },
]

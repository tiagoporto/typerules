import nuxt from '@next/eslint-plugin-next'
import tpConfig from '@tiagoporto/eslint-config'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['old/', 'public/index.html'] },
  ...tpConfig.configs.react,
  nuxt.flatConfig.recommended,
  nuxt.flatConfig.coreWebVitals,
  {
    files: ['**/*.tsx'],
    rules: {
      'unicorn/filename-case': [
        'error', { case: 'pascalCase', ignore: ['page.tsx', 'layout.tsx'] },
      ],
    },
  },
]

export default {
  '*': 'prettier --check --ignore-unknown --write',
  '*.{md,markdown,mdx}': ['remark --frail', 'eslint --max-warnings 0'],
  '*.{scss,css}': 'stylelint --fix',
  // '*.{ts,tsx}': () => 'tsc --project tsconfig.json',
  '*.{js,mjs,cjs,jsx,ts,tsx}': [
    'eslint --max-warnings 0',
    //   'jest --bail --findRelatedTests --passWithNoTests',
  ],
}

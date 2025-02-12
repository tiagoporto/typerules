export default {
  '*': 'prettier --check --ignore-unknown --write',
  '*.{md,markdown,mdx}': [
    'remark --frail',
    'eslint --max-warnings 0 --no-warn-ignored',
  ],
  '*.{html,yml,json,jsonc,json5}': 'eslint --max-warnings 0 --no-warn-ignored',
  '*.{scss,css}': 'stylelint --fix',
  // '*.{ts,tsx}': () => 'tsc --project tsconfig.json',
  '*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': [
    'eslint --max-warnings 0 --no-warn-ignored',
    //   'jest --bail --findRelatedTests --passWithNoTests',
  ],
}

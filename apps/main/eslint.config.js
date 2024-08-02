import { defineConfig, reactjs } from '@hyperse/eslint-config-hyperse';

export default defineConfig([
  ...reactjs,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
]);

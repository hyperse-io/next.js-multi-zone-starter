import type { Config } from 'tailwindcss';
import ui from '@hyperse/core/tailwind';

const config: Config = {
  darkMode: 'class',

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  presets: [require('@vercel/examples-ui/tailwind'), ui],

  // `ui.content` includes a path to the components that are using tailwind in @hyperse/core
  content: ui.content.concat([
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './node_modules/@vercel/examples-ui/**/*.js',
  ]),
};

export default config;

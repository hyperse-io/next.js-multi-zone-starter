import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
/**
 * This is the base lint-staged rules config and just includes prettier by default.
 * A good practice is to override this base configuration in each package and/or application
 * where we are able to add customization depending on the nature of the project (eslint...).
 */
import { getEslintFixCmd } from './lint-staged.common.mjs';

/**
 * @type {Record<string, (filenames: string[]) => string | string[] | Promise<string | string[]>>}
 */
const rules = {
  '**/*.{js,jsx,ts,tsx,mjs,cjs}': (filenames) => {
    return getEslintFixCmd({
      cwd: dirname(fileURLToPath(import.meta.url)),
      fix: true,
      cache: true,
      // when autofixing staged-files a good tip is to disable react-hooks/exhaustive-deps, cause
      // a change here can potentially break things without proper visibility.
      rules: [],
      maxWarnings: 25,
      files: filenames,
    });
  },
};

export default rules;

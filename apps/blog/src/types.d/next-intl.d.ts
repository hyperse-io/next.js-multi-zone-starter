// Use type safe message keys with `next-intl`
import type en from '../../i18n/en.json';

type Messages = typeof en;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}

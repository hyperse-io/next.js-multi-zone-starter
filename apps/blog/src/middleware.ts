import { type NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';
import { locales } from './navigation';

const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix: 'as-needed',
  defaultLocale: 'en',
});

// Note that this callback is only invoked if
// the `authorized` callback has returned `true`
// and not for pages listed in `pages`.
export default function middleware(req: NextRequest) {
  return intlMiddleware(req);
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: [
    // This entry handles the root of the base
    // path and should always be included
    '/',
    '/((?!api|_next|.*\\..*).*)',
  ],
  runtime: 'nodejs',
};

import { type PropsWithChildren } from 'react';
import { Inter as FontSans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { PublicEnvScript } from 'next-runtime-env';
import { locales } from '@/navigation';
import { ProgressBar, Providers } from '@hyperse/core';
import { cn } from '@hyperse/utils';
import '../globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: PropsWithChildren<PageProps>) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as never)) notFound();

  // https://next-intl-docs.vercel.app/blog/next-intl-3-0#static-rendering-of-server-components
  unstable_setRequestLocale(locale);

  // Receive messages provided in `i18n.ts`
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <PublicEnvScript />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={cn(`${fontSans.className}`)}>
        <ProgressBar />
        <Providers>
          <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}

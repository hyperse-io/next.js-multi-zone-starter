import { type ReactNode } from 'react';
import { Provider } from 'jotai';
import { ThemeProvider } from './ThemeProvider';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
}

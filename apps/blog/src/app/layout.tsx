import { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// Since we have a root `not-found.tsx` page, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}

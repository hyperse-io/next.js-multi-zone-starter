'use client';

import { FC } from 'react';
import { AppProgressBar } from 'next-nprogress-bar';

type ProgressBarProps = {
  color?: string;
};
export const ProgressBar: FC<ProgressBarProps> = ({ color = '#1a56db' }) => {
  return (
    <AppProgressBar
      height="4px"
      color={color}
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};

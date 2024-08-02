'use client';

import { useEffect, useState } from 'react';
import { Home } from '@/features/Home/Home';
import Logo from '@/public/logo.svg';
import { matchingTextColor, randomColor } from '@hyperse/utils';
import { Page } from '@vercel/examples-ui';

export default function Index() {
  const [bgColor, setBgColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const changeColor = () => {
    const bg = randomColor();
    setBgColor(bg);
    setTextColor(matchingTextColor(bg));
  };

  useEffect(changeColor, []);

  return (
    <Page>
      <Home bgColor={bgColor} textColor={textColor} changeColor={changeColor} />
      <Logo className="w-32" />
    </Page>
  );
}

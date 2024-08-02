import { FC } from 'react';
import { Button } from '@hyperse/core';
import { Code, List, Text } from '@vercel/examples-ui';

type HomeProps = {
  bgColor: string;
  textColor: string;
  changeColor: () => void;
};

export const Home: FC<HomeProps> = ({ bgColor, textColor, changeColor }) => {
  return (
    <>
      <Text variant="h1" className="mb-10">
        Best practices on using Next.js in a TypeScript monorepo
      </Text>
      <Text className="mb-4 text-green-500">
        In this monorepo app we have a single site with two installed
        dependencies that are available in the same repository.
      </Text>
      <List className="mb-4 text-red-600">
        <li>
          <Code>app</Code> is the current Next.js site you&apos;re looking at
        </li>
        <li>
          <Code>packages/ui</Code> is a package that exports the button you see
          below
        </li>
        <li>
          <Code>packages/utils</Code> is a package that exports a function that
          generates random colors. Click the button to see it in action
        </li>
      </List>
      {bgColor && textColor && (
        <>
          <Button
            style={{
              backgroundColor: bgColor,
              color: textColor,
              borderColor: textColor,
            }}
            onClick={changeColor}
          >
            Change Color
          </Button>
        </>
      )}
    </>
  );
};

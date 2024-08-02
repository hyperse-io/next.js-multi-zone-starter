# next.js-multi-zone-starter

Best practices on using Next.js in a TypeScript Multi Zones Application

## highlight features

- Using `Turborepo`
- Integrated internationalization with `next-intl `.
- Integrated package manager `yarn@4.3.1`
- Configure the behavior of turbo by adding a `turbo.json` file in your Workspace's root directory [turbo](https://turbo.build/repo/docs/reference/configuration)
- Using next.js `app-router`
- Integrated `tailwindcss`
- Integrated `eslint V9`
- Integrated `hyperse next-env` for auto customized environment over next.js
- Integrated `zod`
- Integrated `@svgr/webpack` allow directly import `.svg` as `component`
- Integrated `vitest` for unitest also support `tspath alias`
- Integrated `husky` for commit hook
- Integrated `lint-staged` for commit hook
- Integrated `git cz`
- Integrated `changesets`
- Integrated `commitlint`
- Integrated `code-inspector-plugin`(`[shift + ⌥option]`) to resolve `page/component's` code is located.

## tsconfig.json

- tsconfig.json (vitest, eslint)
- tsconfig.dev.json `yarn dev`
- tsconfig.build.json `yarn build`

## Note

the `paths` tsconfig.json also can be resolved for `apps/*`, we should avoid to use `ts paths` alias to write code for `mono-module` like `core`

1. `utils` we can use `alias`
2. `core` we should not use `alias`

If you are looking for single repo next.js best practices starter please see below link

https://github.com/hyperse-io/next.js-multi-zone-starter

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

## Monorepo Next.js Applications

- [Standard Turborepo Next.js starter](https://github.com/hyperse-io/next.js-turborepo-starter)
- [Vercel Demo](https://github.com/vercel/next.js/blob/canary/examples/with-zones/README.md)

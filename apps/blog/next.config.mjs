import withNextIntl from 'next-intl/plugin';
import { codeInspectorPlugin } from 'code-inspector-plugin';
import { z } from 'zod';
import { getNextConfig, getNextConfigEnv } from '@hyperse-io/next-env';
import bundleAnalyzer from '@next/bundle-analyzer';

const plugins = [];
const isDev = process.env.NODE_ENV === 'development';

plugins.push(
  withNextIntl('./src/i18n.ts'),
  bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  })
);

// We use a custom env to validate the build env
const buildEnv = getNextConfigEnv(
  z.object({
    NEXT_BUILD_ENV_OUTPUT: z
      .enum(['standalone', 'export'], {
        description:
          'For standalone mode: https://nextjs.org/docs/app/api-reference/next-config-js/output',
      })
      .optional(),
    NEXT_PUBLIC_SHOP_API: z.string(),
  }),
  {
    isProd: process.env.ANALYZE === 'production',
  }
);
/**
 * @type {import("next").NextConfig}
 */
const config = {
  basePath: '/blog',
  reactStrictMode: true,
  output: buildEnv.NEXT_BUILD_ENV_OUTPUT,
  webpack(config) {
    if (isDev) {
      config.plugins.push(
        // SSR can't not remove data-insp-path from `html` tag, so do not set hideDomPathAttr to false
        codeInspectorPlugin({ bundler: 'webpack', hideDomPathAttr: false })
      );
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default getNextConfig(
  plugins.reduce((config, plugin) => plugin(config), {
    ...config,
  })
);

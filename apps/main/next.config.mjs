import { z } from 'zod';
import { getNextConfig, getNextConfigEnv } from '@hyperse-io/next-env';
import bundleAnalyzer from '@next/bundle-analyzer';

const plugins = [
  bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  }),
];

// We use a custom env to validate the build env
const buildEnv = getNextConfigEnv(
  z.object({
    NEXT_BUILD_ENV_OUTPUT: z
      .enum(['standalone', 'export'], {
        description:
          'For standalone mode: https://nextjs.org/docs/app/api-reference/next-config-js/output',
      })
      .optional(),
    BLOG_URL: z.string(),
  }),
  {
    isProd: process.env.ANALYZE === 'production',
  }
);
const BLOG_URL = buildEnv.BLOG_URL.replace(/\/$/, '');

/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    // Next.js will automatically prefix `basePath` to client side links which
    // is useful when all links are relative to the `basePath` of this
    // application. This option opts out of that behavior, which can be useful
    // if you want to link outside of your zone, such as linking to
    // "/" from "/blog" (the `basePath` for this application).
    // manualClientBasePath: true,
  },
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: `${BLOG_URL}/blog`,
      },
      {
        source: '/blog/:path+',
        destination: `${BLOG_URL}/blog/:path+`,
      },
    ];
  },
};

export default getNextConfig(
  plugins.reduce((config, plugin) => plugin(config), {
    ...config,
  })
);

export {};

// Here we declare the members of the process.env object, so that we
// can use them in our application code in a type-safe manner.
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BLOG_URL: string;
      NEXT_PUBLIC_SHOP_API: string;
      NEXT_PUBLIC_AUTH_URL: string;
      NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
    }
  }
}

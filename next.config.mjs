import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

const config = withNextIntl(nextConfig);

if (config.experimental && config.experimental.turbo) {
  config.turbo = config.turbo || {};
  config.turbo.resolveAlias = {
    ...config.turbo.resolveAlias,
    ...config.experimental.turbo.resolveAlias,
  };
  delete config.experimental.turbo;
}

export default config;

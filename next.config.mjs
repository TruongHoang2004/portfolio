/** @type {import('next').NextConfig} */
const nextConfig = {
  turbo: {
    resolveAlias: {
      'next-intl/config': './i18n/request.ts',
    },
  },
};

export default nextConfig;

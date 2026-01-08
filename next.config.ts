import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  // 如果部署到 https://username.github.io/repo-name，设置 basePath
  // 如果部署到 https://username.github.io，则留空
  basePath: isProd ? '/haifei_portfolio' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default withNextIntl(nextConfig);

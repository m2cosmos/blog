import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // CMS의 동적 페이지 지원을 위해 주석 처리
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

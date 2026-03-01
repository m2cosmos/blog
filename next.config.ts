import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 정적 내보내기 시 이미지 최적화 비활성화 (Cloudflare 이미지 서비스 등을 대신 사용 가능)
  },
};

export default nextConfig;

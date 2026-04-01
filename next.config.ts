import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default nextConfig;

const nextConfig = {
  output: 'export',        // 关键！让 Next.js 输出静态文件
  // 如果你的仓库名叫 shiannona-cloud，加上这行（避免资源路径错误）
  basePath: '/shiannona-cloud',
  assetPrefix: '/shiannona-cloud/',
  images: {
    unoptimized: true,     // GitHub Pages 不支持 Next.js 图片优化
  },
}

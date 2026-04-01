import type { NextConfig } from 'next'

const repoName = 'shiannona-cloud'   // ← 改成你的仓库名（就是这个）

const nextConfig: NextConfig = {
  output: 'export',                    // 关键：输出静态文件（GitHub Pages 需要）
  
  // 因为 GitHub Pages 的地址是 https://用户名.github.io/shiannona-cloud/
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  // 如果你用了 next/image 组件，需要加上这行（GitHub Pages 不支持图片优化）
  images: {
    unoptimized: true,
  },

  // 可选：让链接带 / 结尾（推荐保持默认 false）
  // trailingSlash: true,
}

export default nextConfig

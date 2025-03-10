/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 如果您的GitHub Pages仓库不是在根目录，而是在子目录中，请取消下面这行的注释并修改为您的仓库名
  // basePath: '/your-repo-name',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig 
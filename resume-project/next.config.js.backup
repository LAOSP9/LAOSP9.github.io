// next.config.js
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    // 设置基础路径，对于 GitHub Pages 个人站点，通常是 '/仓库名'，但对于 '用户名.github.io' 这种特殊仓库，根目录就是站点本身，所以通常设为空字符串或 '/'
    // 但明确设置为空字符串以确保根路径引用正确是最稳妥的做法。
    assetPrefix: '',
    basePath: '',
    // 设置为静态导出模式，这是部署到 GitHub Pages 等静态托管平台所必需的。
    output: 'export',
    // 可选：在导出时自动优化图片
    images: {
        unoptimized: true
    },
    // 确保在导出后所有静态资源链接路径正确
    trailingSlash: true,
    // 可选：跳过需要进行服务器端渲染的路径的类型检查，对于纯静态站点可以加快构建速度
    skipTrailingSlashRedirect: true,
    skipMiddlewareUrlNormalize: true,
}

module.exports = nextConfig
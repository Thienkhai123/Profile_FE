const { i18n } = require('./i18n.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  i18n: i18n,
  // images: {
  //   domains: ['he44r2a3tgobj.vcdn.cloud', 'lh3.googleusercontent.com']
  // },
  optimizeFonts: true
}

module.exports = nextConfig

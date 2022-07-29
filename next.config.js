/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.pokemon.com']
  }
}

// eslint-disable-next-line no-undef
module.exports = nextConfig

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: ['assets.pokemon.com']
  }
})

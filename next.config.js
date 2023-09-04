/** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
// }

// module.exports = nextConfig
const nextConfig = {
  distDir: "build",
};

const pathPrefix = process.env.NODE_ENV === 'production'
  ? '/home/'
  : '';

module.exports = {
  nextConfig,
  // assetPrefix: pathPrefix,
  // env: {
  //   pathPrefix,
  // },
};

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'backend.vermap.com',
          },
        ],
    },
    webpack(config, options) {
      const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'))
      fileLoaderRule.exclude = /\.svg$/
  
      config.module.rules.push({
        loader: '@svgr/webpack',
        options: {
          prettier: false,
          svgo: true,
          svgoConfig: {
            plugins: [{ removeViewBox: false }],
          },
          titleProp: true,
        },
        test: /\.svg$/,
      });
  
      return config;
  }
};

export default nextConfig;

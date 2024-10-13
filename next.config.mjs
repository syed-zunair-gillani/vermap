/** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [
//           {
//             protocol: 'https',
//             hostname: 'backend.vermap.com',
//           },
//         ],
//     },
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
import withOptimizedImages from 'next-optimized-images';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend.vermap.com',
      },
    ],
  },
  // Additional settings for next-optimized-images
  handleImages: ['svg'],
};

// Export the config wrapped with the plugin
export default withOptimizedImages(nextConfig);

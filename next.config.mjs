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
};

export default nextConfig;

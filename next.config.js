/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    async rewrites () {
        return [
            {
                // New route
                source: '/avocado/:path*',
                // Old route - but its still working
                destination: '/product/:path*'
            }
        ];
    }
}
  
module.exports = nextConfig;
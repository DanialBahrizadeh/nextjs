/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true, // if it's change for new link use true but if there are temperry problem then make it false
      },
      {
        source: "/old-blog/:id",
        destination: "/new-blog/:id",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

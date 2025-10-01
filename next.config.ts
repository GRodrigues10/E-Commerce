/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // aceita qualquer domínio HTTPS
      },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "daiki-beppu.assets.newt.so",
        port: "",
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "contractor-plus-website.s3.us-east-2.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "t4.ftcdn.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "homebusinessmag.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.redd.it",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.boredpanda.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

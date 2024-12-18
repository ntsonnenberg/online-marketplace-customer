/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`,
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "curie.pnnl.gov",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

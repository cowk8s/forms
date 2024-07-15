
/** @type {import('next').NextConfig} */

const getHostname = (url) => {
  const urlObj = new URL(url);
  return urlObj.hostname;
};

const nextConfig = {
  assetPrefix: process.env.ASSET_PREFIX_URL || undefined,
  output: "standalone",
  experimental: {
    serverComponentsExternalPackages: ['@aws-sdk'],
  },
  transpilePackages: ["@cowk8s/lib"]
}

const exportConfig = nextConfig;

export default exportConfig;
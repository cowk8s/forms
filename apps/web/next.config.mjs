
import createJiti from "jiti";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const jiti = createJiti(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

jiti("@cowk8s/lib/env");
/** @type {import('next').NextConfig} */

const getHostname = (url) => {
  const urlObj = new URL(url);
  return urlObj.hostname;
};

const nextConfig = {
  assetPrefix: process.env.ASSET_PREFIX_URL || undefined,
  output: "standalone",
  poweredByHeader: false,
  experimental: {
    outputFileTracingIncludes: {
      "app/api/packages": ["../../packages/js-core/dist/*", "../../packages/surveys/dist/*"],
    },
  },
  transpilePackages: ["@cowk8s/database", "@cowk8s/ui", "@cowk8s/lib"]
}

const exportConfig = nextConfig;

export default exportConfig;
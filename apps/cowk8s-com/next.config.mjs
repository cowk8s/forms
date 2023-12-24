import nextMDX from "@next/mdx";

import { withPlausibleProxy } from "next-plausible";
import { remarkPlugins } from "./mdx/remark.mjs";
import withSearch from "./mdx/search.mjs";

const withMDX = nextMDX({
  options: {
    remarkPlugins,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  images: {

  },
};

export default withPlausibleProxy({ customDomain: "https://plausible.cowk8s.com" })(
  withSearch(withMDX(nextConfig))
);
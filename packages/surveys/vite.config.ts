import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import preact from "@preact/preset-vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

const buildPackage = process.env.WEBSITES_PACKAGE_BUILD || "websites";

// const entryPoint = buildPackage === "websites" ? "src/index.ts" : "src/sideload/question-date/index.tsx";
const entryPoint = "src/index.ts";
// const name = buildPackage === "websites" ? "azicloud-websites" : "azicloud-question-date";
const name = "azicloud-websites";
// const fileName = buildPackage === "websites" ? "index" : "question-date";
const fileName = "index";

const config = ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return defineConfig({
    define: {
      "process.env": env,
    },
    build: {
      emptyOutDir: false,
      minify: "terser",
      sourcemap: true,
      lib: {
        entry: resolve(__dirname, entryPoint),
        name,
        formats: ["cjs", "es", "umd"],
        fileName,
      },
    },
    plugins: [preact(), dts({ rollupTypes: true }), tsconfigPaths()],
  });
};

export default config;

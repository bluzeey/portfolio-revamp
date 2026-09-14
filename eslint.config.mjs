import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypeScript,
  globalIgnores([
    ".next/**",
    "node_modules/**",
    "pages/**/*.js",
    "pages/**/*.jsx",
    "components/**/*.js",
    "components/**/*.jsx",
    "data/**/*.js",
    "redux/**",
    "utils/**/*.js",
    "tailwind.config.js",
    "postcss.config.js",
    "webpack.config.js"
  ])
]);

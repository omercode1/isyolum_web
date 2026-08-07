import { defineConfig, globalIgnores } from "eslint/config";
import next from "eslint-config-next";

export default defineConfig([
  globalIgnores([
    "node_modules/**",
    ".next/**",
    "out/**",
    "dist/**",
    "coverage/**",
    "build/**",
    "next-env.d.ts",
  ]),
  ...next,
]);

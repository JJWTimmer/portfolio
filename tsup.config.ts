import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["components/index.ts"],
  format: ["esm", "cjs"],
  dts: {
    compilerOptions: {
      incremental: false,
    },
  },
  outDir: "dist",
  external: ["react", "react-dom", "next"],
})

import esbuild from "esbuild";

/**
 * @typedef {esbuild.BuildOptions} BuildConfig
 */
/** @type {BuildConfig} */
const config = {
  logLevel: "info",
  entryPoints: ["src/index.ts"],
  bundle: true,
  allowOverwrite: true,
  outfile: "dist/index.js",
  minify: false,
  platform: "node",
  format: "esm",
  external: ["express"],
};
if (process.argv.includes("--watch")) {
  let ctx = await esbuild.context(config).catch(() => process.exit(1));

  await ctx.watch();
  console.log("watching...");
} else {
  esbuild.build({ ...config, minify: true }).catch(() => process.exit(1));
}

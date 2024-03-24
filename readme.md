# Node.js TypeScript Template using Esbuild*

- This is a Node.js TypeScript template using esbuild.
- To use this template, simply click on the "Use this template" button on GitHub and install dependencies using `pnpm i`.
- Make sure to put all the code inside the `src` folder.

- To compile and run the code , use the command 'pnpm dev'.
- To compile the TypeScript files to JavaScript files, use the command 'pnpm build'.
- To run the JavaScript files, use the command 'pnpm start'.

- Make sure add new dependencies using `pnpm add <package-name>` and add that package to the `config.external` array in the `build.config.mjs` file.

- ```mjs
  const config={
    ...
    external: ["express","your-package-name-here"],
  }
  ```
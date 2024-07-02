import { cleanup } from "./cleanup";
import { compile } from "./compile";
import { generateDts } from "./generate-dts";
import path from "node:path";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import esbuild from "rollup-plugin-esbuild";
import banner from "rollup-plugin-banner2";
import { RollupOptions } from "rollup";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

const { argv } = yargs(hideBin(process.argv)) as any;

const externalPackages = [
  "react/jsx-runtime",
  "react-dom",
  "@emotion/cache",
  "@emotion/react",
  "@emotion/serialize",
  "@emotion/server",
  "@emotion/utils",
  "@emotion/is-prop-valid",
  "@emotion_memoize",
  "@emotion/styled",
  "@emotion/use-insertion-effect-with-fallbacks",
  "@emotion/memoize",
  "@babel/runtime",
  "babel_runtime",
  "@floating-ui/react",
  "@tabler/icons-react",
  "react",
  "ts-deepmerge",
  "usehooks-ts",
  "@simm/core",
  "@simm/hooks",
  "@simm/theme",
  "@simmx/code-highlighter",
  "shiki",
  "chroma-js",
];
const plugins = [
  esbuild({
    sourceMap: false,
    tsconfig: path.resolve("tsconfig.json"),
  }),
  nodeResolve({ extensions: [".ts", ".tsx", ".js", ".jsx"] }),
  replace({
    preventAssignment: true,
  }),
  banner((chunk) => {
    // console.log(chunk.name);
    // const xxx = ['CodeHighlighter', 'components/AppShell', 'CodeHighlighterTabs', '']
    // if (!chunk.name.startsWith('components/AppShell')) {
    //   return "'use client';\n";
    // }
    return "";
  }),
];

(async () => {
  const packages = [
    "@simm/theme",
    "@simm/core",
    "@simm/hooks",
    "@simmx/code-highlighter",
    "@simmx/demo",
  ];
  if (argv._[0] === "all") {
    for (const packageName of packages) {
      await buildPackage(packageName);
    }
  } else if (argv._[0]) {
    for (const item of argv._) {
      await buildPackage(item);
    }
  }
})();

async function buildPackage(packageName: string) {
  console.log("building package ", packageName);
  const packagePath = path.resolve("packages", packageName);
  const config = {
    input: path.resolve(packagePath, "src/index.ts"),
    plugins: plugins,
    output: [
      {
        format: "es",
        entryFileNames: "[name].mjs",
        dir: path.resolve(packagePath, "esm"),
        preserveModules: true,
        sourcemap: true,
      },
      {
        format: "cjs",
        entryFileNames: "[name].cjs",
        dir: path.resolve(packagePath, "cjs"),
        preserveModules: true,
        sourcemap: true,
        interop: "auto",
      },
    ],
    external: externalPackages,
  } as RollupOptions;

  await cleanup(packagePath);
  await generateDts(packagePath);
  await compile(config);
}

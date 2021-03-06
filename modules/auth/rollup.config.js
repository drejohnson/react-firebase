import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: "dist/index.umd.js",
        format: "umd",
        name: "ReactFirebaseAuth"
      },
      {
        file: "dist/index.esm.js",
        format: "esm"
      },
      {
        file: "dist/index.cjs.js",
        format: "cjs"
      }
    ],
    external: ["react", "render-and-add-props", "immer"],
    plugins: [
      typescript({
        typescript: require("typescript"),
        abortOnError: false
      })
    ]
  }
];

import jspmRollup from "@jspm/plugin-rollup";
import filesize from "rollup-plugin-filesize";
import inputMap from "./import-map.mjs";

export default {
  input: "./index.mjs",
  plugins: [
    jspmRollup({
      baseUrl: new URL("./", import.meta.url),
      defaultProvider: "jspm",
      env: ["browser"],
      inputMap,
    }),
    filesize(),
  ],
  output: {
    file: "build/bundle.js",
    format: "esm",
  },
};

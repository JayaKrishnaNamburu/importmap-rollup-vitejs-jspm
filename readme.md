A small repro for using `rollup-plugin-jspm` with non-js entry points.

```shell
vite v2.7.10 building for production...
✓ 0 modules transformed.
[@jspm/plugin-rollup] 
  <head>
>     <title>Custom Code Starter</title>
                                        ^
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

Error parsing file:///Users/jkrishna/Documents/jspm/importmap-rollup-jspm/index.html:6:39
error during build:
Error: 
  <head>
>     <title>Custom Code Starter</title>
                                        ^
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

Error parsing file:///Users/jkrishna/Documents/jspm/importmap-rollup-jspm/index.html:6:39
    at Resolver.analyze (file:///Users/jkrishna/Documents/jspm/importmap-rollup-jspm/node_modules/@jspm/generator/dist/generator.js:1501:23)
    at async TraceMap.traceUrl (file:///Users/jkrishna/Documents/jspm/importmap-rollup-jspm/node_modules/@jspm/generator/dist/generator.js:1840:66)
    at async TraceMap.trace (file:///Users/jkrishna/Documents/jspm/importmap-rollup-jspm/node_modules/@jspm/generator/dist/generator.js:1749:13)
    at async Generator.traceInstall (file:///Users/jkrishna/Documents/jspm/importmap-rollup-jspm/node_modules/@jspm/generator/dist/generator.js:2427:13)
    at async file:///Users/jkrishna/Documents/jspm/importmap-rollup-jspm/node_modules/@jspm/plugin-rollup/jspm-rollup.js:114:9
    at async Promise.all (index 0)
    at async Object.buildStart (file:///Users/jkrishna/Documents/jspm/importmap-rollup-jspm/node_modules/@jspm/plugin-rollup/jspm-rollup.js:113:7)
    at async Promise.all (index 9)
    at async rollupInternal (/Users/jkrishna/Documents/jspm/importmap-rollup-jspm/node_modules/rollup/dist/shared/rollup.js:23522:9)
    at async doBuild (/Users/jkrishna/Documents/jspm/importmap-rollup-jspm/node_modules/vite/dist/node/chunks/dep-76613303.js:37796:24)
```
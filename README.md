# preact-esm-repro

This repo reproduces a problem when using Preact with a mixed ESM/CJS codebase.

## Steps to reproduce

Clone this repository:

```sh
git clone git@github.com:nwalters512/preact-esm-repro.git
```

Install dependencies:

```sh
npm install
```

Build the project:

```sh
npm run build
```

Run the project:

```sh
npm start
```

Observe an error like the following:

```
TypeError: Cannot read properties of undefined (reading '__H')
    at x (/Users/nathan/git/preact-esm-repro/node_modules/preact/hooks/dist/hooks.js:1:159)
    at m (/Users/nathan/git/preact-esm-repro/node_modules/preact/hooks/dist/hooks.js:1:288)
    at d (/Users/nathan/git/preact-esm-repro/node_modules/preact/hooks/dist/hooks.js:1:257)
    at Object.Bar (/Users/nathan/git/preact-esm-repro/dist/Bar.cjs:7:31)
    at U (file:///Users/nathan/git/preact-esm-repro/node_modules/preact-render-to-string/dist/index.mjs:1:5660)
    at U (file:///Users/nathan/git/preact-esm-repro/node_modules/preact-render-to-string/dist/index.mjs:1:4876)
    at U (file:///Users/nathan/git/preact-esm-repro/node_modules/preact-render-to-string/dist/index.mjs:1:6324)
    at D (file:///Users/nathan/git/preact-esm-repro/node_modules/preact-render-to-string/dist/index.mjs:1:3954)
    at file:///Users/nathan/git/preact-esm-repro/dist/index.js:11:13
    at ModuleJob.run (node:internal/modules/esm/module_job:234:25)
```

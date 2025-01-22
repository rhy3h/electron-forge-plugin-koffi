# Plugin Koffi

[![npm](https://img.shields.io/npm/v/electron-forge-plugin-koffi.svg)](https://www.npmjs.com/package/electron-forge-plugin-koffi) 

Currently, when packaging `koffi`, all platform-specific `koffi.node` files are included in the bundlers. Therefore, the purpose of this plugin is to remove unused native modules.

For example, if you use this plugin on a `windows 64-bit` platform, the space occupied by the `koffi` package is 12 MB.
However, when not in use, the maximum bundle size possible with `koffi` is approximately 72 MB, representing an `83%` reduction in size. 

**Note:** `Koffi Plugin` will have no effect if your `packagerOptions.prune` option is set to `false`.

## Plugin method

```js
// forge.config.js

{
  name: 'electron-forge-plugin-koffi',
  config: {}
}

// or

import { KoffiPlugin } from 'electron-forge-plugin-koffi'

const forgeConfig = {
  plugins: [
    new KoffiPlugin({})
  ]
}
```

However, when you use this plugin together with [VitePlugin](https://www.npmjs.com/package/@electron-forge/plugin-vite) or [WebpackPlugin](https://www.npmjs.com/package/@electron-forge/plugin-webpack) and run electron-forge start, it will result in:

`Multiple plugins tried to take control of the start command, please remove one of them`

There is already an [issue](https://github.com/electron/forge/issues/3652) on GitHub regarding this.

To avoid this issue, this plugin provides hooks for injection.

## Hook method

```js
// forge.config.js

import { packageAfterPrune } from 'electron-forge-plugin-koffi'

const forgeConfig = {
  hooks: {
    // @ts-expect-error
    packageAfterPrune
  }
}
```
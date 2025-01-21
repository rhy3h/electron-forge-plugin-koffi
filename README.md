# Plugin Koffi

[![npm](https://img.shields.io/npm/v/@electron-forge/plugin-koffi.svg)](https://www.npmjs.com/package/@electron-forge/plugin-koffi) 

Currently, when packaging `koffi`, all platform-specific `koffi.node` files are included in the bundlers. Therefore, the purpose of this plugin is to remove unused native modules.

For example, if you use this plugin on a `windows 64-bit` platform, the space occupied by the `koffi` package is 12 MB.
However, when not in use, the maximum bundle size possible with `fflate` is approximately 72 MB, representing an `83%` reduction in size. 

**Note:** `Koffi Plugin` will have no effect if your `packagerOptions.prune` option is set to `false`.

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
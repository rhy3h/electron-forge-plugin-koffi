import path from 'path';
import fs from 'fs';

import { ForgeHookFn } from '@electron-forge/shared-types';

const packageAfterPrune: ForgeHookFn<'packageAfterPrune'> = async (_forgeConfig, buildPath, _electronVersion, platform, arch) => {
  const targetPlatformArch = `${platform}_${arch}`

  const koffiBuildDir = path.join(buildPath, 'node_modules/koffi/build/koffi')

  const koffiBuildChildDirs = fs.readdirSync(koffiBuildDir)
  const removeChildDirs = koffiBuildChildDirs.filter((f) => f !== targetPlatformArch)

  for (let i = 0; i < removeChildDirs.length; i++) {
    const targetFilePath = path.resolve(koffiBuildDir, removeChildDirs[i])

    if (fs.existsSync(targetFilePath)) {
      fs.rmSync(targetFilePath, { recursive: true, force: true })
    }
  }
};

export { packageAfterPrune };
import path from 'path';
import fs from 'fs';

import { PluginBase } from '@electron-forge/plugin-base';
import { ForgeHookMap } from '@electron-forge/shared-types';

import { KoffiConfig } from './Config';
import { packageAfterPrune } from './Hooks'

export default class KoffiPlugin extends PluginBase<KoffiConfig> {
  name = 'koffi';

  getHooks(): ForgeHookMap {
    return {
      packageAfterPrune
    };
  }

}

export { KoffiPlugin, KoffiConfig, packageAfterPrune };
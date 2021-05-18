import { store } from './store';
import env from './env';
import { Config } from '../types/config';

const config: Partial<Config> = {
  store,
  env,
};

export default config as Config;
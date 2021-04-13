// // import local from './local';
// // import development from './development';
// // import production from './production';
// // import colors from './colors';
// // import strings from './strings';
// // import store from './store';
// // import externalLinks from './externalLinks';
// // import * as defaults from './defaults';

// let enviroment = {};
// const isDev = process.env.NODE_ENV !== 'production';
// if (isDev) {
//   enviroment = development;
// } else {
//   enviroment = production;
// }
// const headers = {
//   applicationType: 'MB_WEB',
//   deviceType: 'MBWEB',
//   role: 'NONE',
// };
// const config = {
// //   store,
// //   colors,
// //   strings,
// //   defaults,
// //   local,
// //   enviroment,
// //   externalLinks,
//   headers,
// };
// export default config;


import { Config } from '../types/config';
import { store } from './store';


const config: Partial<Config> = {
  store,
};

export default config as Config;
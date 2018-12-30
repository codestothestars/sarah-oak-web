import { Environment } from './environment.interface';

export const environment: Environment = {
  production: false
};

// Removes zone-related error stack frames for easier debugging
import 'zone.js/dist/zone-error';  // tslint:disable-line no-import-side-effect

// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing'; // tslint:disable-line no-import-side-effect

import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any; // tslint:disable-line no-any

// First, initialize the Angular testing environment.
getTestBed()
  .initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
// Then we find all the tests.
const context: any = require.context('./', true, /\.spec\.ts$/); // tslint:disable-line no-any no-unsafe-any
// And load the modules.
context // tslint:disable-line no-unsafe-any
  .keys()
  .map(context);

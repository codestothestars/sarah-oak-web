import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const bootstrap: () => Promise<NgModuleRef<AppModule>> = async (): Promise<NgModuleRef<AppModule>> =>
  platformBrowserDynamic()
    .bootstrapModule(AppModule);
const logError: (err: unknown) => void = (err: unknown): void => console.error(err); // tslint:disable-line no-console

if (environment.production) {
  enableProdMode();
}

bootstrap()
  .catch(logError);

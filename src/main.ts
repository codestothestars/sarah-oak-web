import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { hmrBootstrap } from './hmr';

const bootstrap: () => Promise<NgModuleRef<AppModule>> = async (): Promise<NgModuleRef<AppModule>> =>
  platformBrowserDynamic()
    .bootstrapModule(AppModule);
const hotModule: { hot: boolean } = module as unknown as { hot: boolean };
const logError: (err: unknown) => void = (err: unknown): void => console.error(err); // tslint:disable-line no-console

if (environment.production) {
  enableProdMode();
}

if (environment.hmr && hotModule.hot) {
  hmrBootstrap(module, bootstrap)
    .catch(logError);
} else {
  bootstrap()
    .catch(logError);
}

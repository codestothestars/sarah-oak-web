import { ApplicationRef, ComponentRef, NgModuleRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';

interface Module {
    hot: {
        accept(): void;
        dispose(callback: () => void): void;
    };
}

export const hmrBootstrap: (module: unknown, bootstrap: () => Promise<NgModuleRef<unknown>>) => Promise<void> =
    async (module: Module, bootstrap: () => Promise<NgModuleRef<unknown>>): Promise<void> => {
        let ngModule: NgModuleRef<unknown>;

        module.hot.accept();

        await bootstrap()
            .then((mod: NgModuleRef<unknown>) => ngModule = mod);

        module.hot.dispose(() => {
            const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
            const elements: HTMLElement[] = appRef.components
                .map((c: ComponentRef<unknown>) => c.location.nativeElement as HTMLElement);
            const makeVisible: () => void = createNewHosts(elements);

            ngModule.destroy();

            makeVisible();
        });
    };

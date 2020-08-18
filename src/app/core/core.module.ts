import { NgModule, Optional, SkipSelf } from '@angular/core';

export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    const msg = `${moduleName} has already been loaded. Import Core modules in the AppModule only.`;
    throw new Error(msg);
  }
}

/**
 * Side Note: I've added the api.service, and loading.service in the core folder but now in this module
 * because I'm using inject in 'root' (which has better performance because of the Angular Tree Shaking Providers)
 * Will keep the core module for future interceptors
 */
@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}



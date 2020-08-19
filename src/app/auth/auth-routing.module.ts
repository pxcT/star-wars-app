import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { LoginComponentComponent } from '@app-auth/features/login-component/login-component.component';

// Constants & Eums
import { AUTH_ROUTES_CONFIGURATION } from '@app-auth/auth.routes';

@NgModule({
    imports: [RouterModule.forChild(AUTH_ROUTES_CONFIGURATION)],
    exports: [RouterModule],
    declarations: [],
})
export class AuthRoutingModule { 
    static components = [LoginComponentComponent]
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { SharedModule } from '../shared/shared.module';
import { AuthInterceptor } from './auth.interceptor';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
    declarations: [
        SignInComponent,
        MenuComponent,
        SignUpComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        SharedModule,
    ],
    exports: [
        HttpClientModule, 
        AppRoutingModule, 
        MenuComponent
    ],
    providers: [
        AuthService,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
})
export class CoreModule {}

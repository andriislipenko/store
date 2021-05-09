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

@NgModule({
    declarations: [
    SignInComponent
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ],
    exports: [
        HttpClientModule,
        AppRoutingModule,
    ],
    providers: [
        AuthService,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
})
export class CoreModule {}

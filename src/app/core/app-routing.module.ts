import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from '../items/items/items.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
    { path: 'sign_in', component: SignInComponent },
    { path: 'sign_up', component: SignUpComponent },
    { path: 'items', component: ItemsComponent },
    { path: '**', redirectTo: 'items', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

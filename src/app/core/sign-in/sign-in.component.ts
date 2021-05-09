import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/entities/User';
import { AuthService } from '../auth.service';
import { LoginResponse } from '../entities/login-response';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
    public signInForm: FormGroup = null;

    constructor(
        private authService: AuthService,
        private router: Router,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        this.initSignInForm();
    }

    public onSubmit(): void {
        const user: User = this.signInForm.value;

        this.authService.login(user).subscribe((res: LoginResponse) => {
            this.router.navigate(['home']);
        })
    }

    private initSignInForm(): void {
        this.signInForm = this.formBuilder.group({
            email: [''],
            password: ['']
        })
    }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMAIL_REGEXP } from 'src/app/shared/entities/regexp-patterns';
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
        if (this.signInForm.invalid) return;
        
        const user: User = new User(this.signInForm.value);

        this.authService.login(user).subscribe((res: LoginResponse) => {
            this.router.navigate(['home']);
        });
    }

    private initSignInForm(): void {
        this.signInForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.pattern(EMAIL_REGEXP)]],
            password: ['', [Validators.required, Validators.minLength(4)]]
        })
    }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMAIL_REGEXP } from 'src/app/shared/entities/regexp-patterns';
import { User } from 'src/app/shared/entities/User';
import { equalFieldsValidator } from 'src/app/shared/equal-fields-validator';
import { AuthService } from '../auth.service';
import { LoginResponse } from '../entities/login-response';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
    public signUpForm: FormGroup;

    constructor(
        private authService: AuthService,
        private router: Router,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit(): void {
        this.initSignUpForm();
    }

    public onSubmit(): void {
        if (this.signUpForm.invalid) return;

        const user: User = new User(this.signUpForm.value);

        this.authService.sign_up(user).subscribe((res: LoginResponse) => {
            this.router.navigate(['home']);
        });
    }

    private initSignUpForm(): void {
        this.signUpForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern(EMAIL_REGEXP)]],
            password: ['', [Validators.required, Validators.minLength(4)]],
            passwordConfirmation: [''],
        }, {
            validators: equalFieldsValidator('password', 'passwordConfirmation', 'must be euqal to password')
        });
    }
}

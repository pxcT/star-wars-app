import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { USERS } from '@app-auth/services/mock.data';
import { Router } from '@angular/router';

@Component({
    selector: 'login-component',
    templateUrl: './login-component.component.html',
    styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
    public loginForm: FormGroup;
    public loading = false;
    public submitted = false;

    private mockUsers = USERS;

    constructor(private formBuilder: FormBuilder, private router: Router) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    
    public onSubmit() {
        if (this.loginForm.status === 'VALID') {
            const username = this.loginForm.controls.username.value;
            const password = this.loginForm.controls.password.value;

            const foundUser = this.mockUsers.find((user) => user.password === password && user.username === username);
            
            if (foundUser) {
                window.localStorage.setItem('userId', '324098-21321-dsad-32c23-21es4');
                window.location.reload(); // quick-fix loading (simulate oauth-authentication)
            }
        }
    }

}

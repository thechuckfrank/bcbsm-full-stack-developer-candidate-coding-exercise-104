// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, LoginResponse } from '../auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: any = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const credentials = {
      username: this.loginForm.username,
      password: this.loginForm.password
    };

    this.authService.login(credentials).subscribe(
      (response: LoginResponse) => {
        this.router.navigate(['/app-file-upload']);
      },
      (error: any) => {
        console.error('Login failed:', error);
      }
    );
  }
}

import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from 'src/app/services/auth.service';
import { tap, catchError, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './side-login.component.html',
})
export class AppSideLoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(7)]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.valid) {
      this.authService.login(
        this.isString(this.form.value.username) ? this.form.value.username : '',
        this.isString(this.form.value.password) ? this.form.value.password : ''
      )
        .pipe(
          tap((response: any) => {
            console.log('Login successful', response);
            localStorage.setItem('token', response.token);
            this.router.navigate(['/']);
          }),
          catchError((error: any) => {
            console.error('Login failed', error);
            return (error);
          })
        )
        .subscribe();
    } else {
      console.error('Form is invalid');
    }
  }

  private isString(value: string | null | undefined): value is string {
    return typeof value === 'string';
  }
}
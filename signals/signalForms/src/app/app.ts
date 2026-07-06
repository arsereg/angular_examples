import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginData } from './interfaces/LoginData';
import { form, FormField, required, email, minLength, maxLength, pattern, submit  } from '@angular/forms/signals'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormField],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  loginModel = signal<LoginData>({
    email: '',
    password: '',
    rememberMe: false
  });

  loginForm = form(this.loginModel, (fieldPath) => {
  required(fieldPath.email, {message: 'Email is required'});
  email(fieldPath.email, {message: 'Enter a valid email address'});
  required(fieldPath.password, {message: 'Password is required'});
  minLength(fieldPath.password, 8, {message: 'Password must be minimum 8 characters length'});
  maxLength(fieldPath.password, 32, {message: 'Password must be maximum 32 characters length'});
  pattern(fieldPath.password, /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/, {
    message: 'Password must include an uppercase letter, a lowercase letter, a number, and a special character',
  });
});


  onSubmit(event: Event){
    event.preventDefault();
    submit(this.loginForm, async () => {
      const credentials = this.loginModel();
      console.log('Loggin in with: ', credentials);
    });

  }

}

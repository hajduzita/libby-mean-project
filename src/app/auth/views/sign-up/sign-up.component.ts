import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import {AuthService, ISignUpBody } from '../../shared/auth.service';
import {take} from "rxjs";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  public signUpForm!: FormGroup;

  constructor(private authService: AuthService) {
    this.signUpForm = new FormGroup<any>({
      email: new FormControl<string>(''),
      password: new FormControl<string>('')
    })
  }

  public onSignUp(): void {
    console.log(this.signUpForm.value);
    this.authService
      .signUp(this.signUpForm.value)
      .pipe(
        take(1)
      )
      .subscribe({
        next: (response: HttpResponse<ISignUpBody>) => {
          alert('Registration was successful');
          console.log(response);
        },
        error: (response: HttpErrorResponse) => {
          console.log(response);
        }
      })
  }

}

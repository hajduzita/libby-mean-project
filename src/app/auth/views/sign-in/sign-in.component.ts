import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { take } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { AuthService, ISignInBody } from '../../shared/auth.service';
import { JwtService } from '../../shared/jwt.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  public signInForm!: FormGroup;
  private _token!: string | undefined;

  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
    private router: Router) {
    this.signInForm = new FormGroup<any>({
      email: new FormControl<string>(''),
      password: new FormControl<string>('')
    })
  }

  public onSignIn(): void {
    console.log(this.signInForm.value);
    this.authService
      .signIn(this.signInForm.value)
      .pipe(
        take(1)
      )
      .subscribe({
        next: (response: HttpResponse<ISignInBody>) => {
          this._token = response.body?.token;
          if (!this._token) {
            return;
          }
          this.jwtService.setToken(this._token);
          const userId = this.jwtService.getTokenUserId(this._token);
          this.jwtService.setUserId(userId);
          console.log('userId-signin', userId)
          this.router.navigate(['/', 'quotes']);
          console.log('token', response.body?.token)
        },
        error: (response: HttpErrorResponse) => {
          console.log(response)
        }
      })
  }

}

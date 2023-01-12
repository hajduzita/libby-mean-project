import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment as ENV } from '../../../environments/environment';

interface ISignUpReq {
  email: string;
  password: string;
}

interface ISignInReq {
  email: string;
  password: string;
}

export interface ISignInBody {
  token: string;
}

export interface ISignUpBody extends ISignUpResult{
  message: string;
}

interface ISignUpResult {
  email: string;
  password: string;
  _id: string;
  __v: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public signUp(signUp: ISignUpReq): Observable<HttpResponse<ISignUpBody>> {
    return this.http.post<ISignUpBody>(
      `${ENV.api}/user/sign-up`,
      signUp,
      { observe: 'response'}
    );
  }

  public signIn(signIn: ISignInReq): Observable<HttpResponse<ISignInBody>> {
    return this.http.post<ISignInBody>(
      `${ENV.api}/user/sign-in`,
      signIn,
      { observe: 'response'}
    );
  }

}

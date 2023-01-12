import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from './jwt.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private jwtService: JwtService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.jwtService.getToken();
    console.log('TOKEN', token)
    const clone = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    })
    return next.handle(clone);
  }
}

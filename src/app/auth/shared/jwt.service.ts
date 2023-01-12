import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private readonly key = 'token';

  constructor() { }

  public getToken(): any {
    return localStorage.getItem(this.key);
  }

  public setToken(token: string): void {
    localStorage.setItem(this.key, token)
  }

  public removeToken(): void {
    return localStorage.removeItem(this.key);
  }

  public getTokenUserId(codedToken: string): string {
    return this.decodeToken(codedToken).id;
  }

  public getUserId(): string {
    return localStorage.getItem('userId')!;
  }

  public setUserId(userId: string) {
    return localStorage.setItem('userId', userId);
  }

  public removeUserId(): void {
    return localStorage.removeItem('userId');
  }

  public logoutUser(): void {
    this.removeToken();
    this.removeUserId();
  }

  public isUserLoggedIn(): boolean {
    return !!localStorage.getItem(this.key);
  }

  public decodeToken(token: any): any {
    if (token === null) {
      return null;
    }
    const splitToken = token.split('.');
    const tokenPayload = splitToken[1];
    const decoded = this.b64DecodeUnicode(tokenPayload);
    return JSON.parse(decoded);
  }

  private b64DecodeUnicode(s: string): string {
    return decodeURIComponent(Array.prototype.map.call(atob(s), (c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
  }

}

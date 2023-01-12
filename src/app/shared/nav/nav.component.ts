import { Component } from '@angular/core';
import { JwtService } from '../../auth/shared/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  public isUserAuth!: boolean;

  constructor(
    private jwtService: JwtService,
    private router: Router) {
    this.isUserAuth = this.jwtService.isUserLoggedIn();
  }

  public onLogout(): void {
    this.router.navigate(['/', 'auth', 'sign-in'])
    this.jwtService.logoutUser();
    this.isUserAuth = false;
    alert('You just logged out! Bye, see you soon :)')
  }

}

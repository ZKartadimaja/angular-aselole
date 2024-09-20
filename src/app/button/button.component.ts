import { Component } from '@angular/core';
import { AuthenticationService } from '../../service/authentification/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  private tokenKey = 'authToken';
  constructor(
    
    private authService : AuthenticationService,
    private router: Router
  ){

  }
  onLogout(){
    localStorage.removeItem(this.tokenKey),
    this.router.navigate(['/login'])
  }

}

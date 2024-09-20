import { Component } from '@angular/core';
import { AuthenticationService } from '../../../service/authentification/authentification.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username!: string ;
  password!: string ;
  error: string = '';
  addUserForm!: FormGroup;

  constructor(
    private authService : AuthenticationService,
    private router: Router
  ) {
    this.addUserForm = new FormGroup({
      username  : new FormControl('', [Validators.required]),
      password  : new FormControl('', [Validators.required]),
    })
  }

  onLogin(): void {
    this.username = this.addUserForm.get('username')?.value,
    this.password = this.addUserForm.get('password')?.value,
    this.authService.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => this.error = 'Login failed. Please try again. ',
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { afterRender, Injectable } from '@angular/core';
import { response } from 'express';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'https://dummyjson.com/auth/login'
  private tokenKey = 'authToken';

  constructor(private http: HttpClient) {
    afterRender(() => {
      return !!localStorage.getItem(this.tokenKey);
    })
   }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password }).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem(this.tokenKey, response.token);
        }
      })
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }
}

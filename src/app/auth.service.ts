// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginResponse {
  id: string;
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authEndpoint = 'http://localhost:8080/auth'; 
  private loginEndpoint = `${this.authEndpoint}/login`;

  constructor(private http: HttpClient) { }

  login(credentials: { username: string, password: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.loginEndpoint, credentials);
  }
}




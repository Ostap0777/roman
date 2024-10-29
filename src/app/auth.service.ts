import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://your-api-url.com/auth/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password });
  }
  register(firstName: string, lastName: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { firstName, lastName, email, password });
  }
}

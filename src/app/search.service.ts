import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'https://your-api-url.com/search'; 

  constructor(private http: HttpClient) {}

  search(from: string, to: string, departureDate: string, returnDate: string): Observable<any> {
    const searchParams = { from, to, departureDate, returnDate };
    return this.http.post<any>(this.apiUrl, searchParams);
  }
}

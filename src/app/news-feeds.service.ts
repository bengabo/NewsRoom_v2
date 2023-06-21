import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsFeedsService {
  constructor(private http: HttpClient) {}

  API_KEY = environment.API_Key;
  API_URL = environment.API_URL;

  getNews(url: String): Observable<any> {
    return this.http.get(`${this.API_URL}/${url}&apiKey=${this.API_KEY}`);
  }
}

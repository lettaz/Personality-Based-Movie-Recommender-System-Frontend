import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://127.0.0.1:5000/api'; // Adjust as per your API URL

  constructor(private http: HttpClient) { }

  createNewUser(personalityData: any) {
    return this.http.post<{ user_id: string }>(`${this.apiUrl}/users/new`, personalityData);
  }

  getUserPersonalityData(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/personality/${userId}`);
  }

  getMovieRecommendations(userId: string, topN: number, k: number): Observable<any> {
    const body = { user_id: userId, top_n: topN, k: k };
    return this.http.post(`${this.apiUrl}/recommendations/movies`, body);
  }

  getGenreRecommendations(userId: string, num_genre: number, k: number): Observable<any> {
    const body = { user_id: userId, num_genre: num_genre, k: k };
    return this.http.post(`${this.apiUrl}/recommendations/genre`, body);
  }
}

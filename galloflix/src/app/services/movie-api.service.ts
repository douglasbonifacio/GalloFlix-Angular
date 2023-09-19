import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://api.themoviedb.org/3";
  apiKey = "8e1dae3ff86c701b9a8bf82107af54ad";

  //banner API Data
  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}&language=pt-BR`);
  }
  trendingMovieData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_Key}&language=pt-BR`);
  }

}

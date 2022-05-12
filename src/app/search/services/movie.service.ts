import { Injectable } from '@angular/core';
import { Movie, MoviesReturnObj, MovieDetails } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private API_URL = environment.apiURL;
  private API_KEY = environment.apiKey;

  constructor(private http: HttpClient) { }

  /**
   * @description Get movie details by imdbID
   * @param imdbID
   * @returns {Observable<MovieDetails>}
   */
  getMovie(imdbID: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${this.API_URL}${this.API_KEY}&i=${imdbID}`);
  }

  /**
   * @description Get movies by name
   * @param name
   * @returns {Observable<MoviesReturnObj>}
   */
  getMovies(name: string): Observable<Movie[]> {
    return this.http.get<MoviesReturnObj>(`${this.API_URL}${this.API_KEY}&s=${name}`).pipe(
      map(movies => movies.Search)
    );
  }
}


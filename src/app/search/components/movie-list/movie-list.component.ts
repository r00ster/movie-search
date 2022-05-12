import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from 'src/app/shared/services/header.service';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter', style({ opacity: 0, transform: 'translateY(-15px)' }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0px)' }))
        ]), { optional: true })
      ])
    ])
  ]
})
export class MovieListComponent implements OnInit {
  showSpinner!: boolean;
  movies: Movie[] = [];
  movie!: Movie;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.title.next('Movie List');
    // no need to unsubscribe, because angular manages the router observables for us
    this.route.params.subscribe(params => {
      if (params['searchVal']) {
        this.showSpinner = true;
        // no need to unsubscribe, because it returns only one value and cleans itself
        this.movieService.getMovies(params['searchVal'])
          .subscribe(movies => {
            this.showSpinner = false;
            this.movies = movies;
          });
      }
    });
  }

  /**
   * @description Lists movies on the page
   * @param $event
   * @returns {void}
   */
  listMovies($event: string): void {
    this.showSpinner = true;
    // no need to unsubscribe, because it returns only one value and cleans itself
    this.movieService.getMovies($event)
      .subscribe(movies => {
        this.showSpinner = false;
        this.movies = movies;
      });
  };

  /**
   * @description Opens movie details page
   * @param imdbID
   * @returns {void}
   */
  openMovieDetails(imdbID: string): void {
    this.router.navigate(['search/', imdbID, 'details']);
  };

  /**
   * @description Show poster if movie has one
   * @param movie
   * @returns boolean
   */
  showPoster(movie: Movie): boolean {
    return movie.Poster !== 'N/A';
  }

  /**
   * @description Check if empty array of movies is returned
   * @returns boolean
   */
  moviesEmpty(): boolean {
    return this.movies === undefined || this.movies.length === 0;
  }
}

import { Component, OnInit } from '@angular/core';
import { MovieDetails } from '../../models/movie';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from 'src/app/shared/services/header.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  showSpinner!: boolean;
  movie!: MovieDetails;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) { }

  ngOnInit(): void {
    this.headerService.title.next('Movie Details');
    this.showSpinner = true;
    // no need to unsubscribe, because angular manages the router observables for us
    this.route.params.subscribe(params => {
      // no need to unsubscribe, because it returns only one value and cleans itself
      this.movieService.getMovie(params['id']).subscribe(movie => {
        this.showSpinner = false;
        this.movie = movie;
      });
    });
  }
}

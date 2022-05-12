import { Component, Input } from '@angular/core';
import { Rating } from '../../models/rating';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-average-rating',
  templateUrl: './average-rating.component.html',
  styleUrls: ['./average-rating.component.scss'],
  animations: [
    trigger('grow', [
      transition(':enter', [
        style({ height: '0', overflow: 'hidden' }),
        animate(500, style({ height: '*' }))
      ]),
      transition(':leave', [
        animate(500, style({ height: 0, overflow: 'hidden' }))
      ])
    ])
  ]
})
export class AverageRatingComponent {
  @Input() ratings!: Rating[];

  /**
   * @description Returns the average rating of the movie
   * @returns {string}
   */
  calculateAvarageRating(): string {
    let sum: number = 0;
    let ratingValue: number;
    this.ratings.forEach(rating => {
      if (rating.Source === 'Internet Movie Database') {
        ratingValue = parseFloat(rating.Value.slice(0, -3)) * 10;
      } else if (rating.Source === 'Rotten Tomatoes') {
        ratingValue = parseFloat(rating.Value.slice(0, -1));
      } else {
        ratingValue = parseFloat(rating.Value.slice(0, -3));
      }
      sum += ratingValue;
    });
    return (sum / this.ratings.length).toFixed(0);
  }
}

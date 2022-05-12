import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  title: BehaviorSubject<string>;

  constructor() {
    this.title = new BehaviorSubject('Movie Search');
  }
}

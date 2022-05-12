import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title$: BehaviorSubject<string> = this.headerService.title;

  constructor(private router: Router, private headerService: HeaderService) { }

  /**
   * @description Check if user is on main search page
   * @returns {boolean}
   */
  isHome(): boolean {
    return this.router.url === '/search';
  }

  /**
   * @description Open main search page
   * @returns {void}
   */
  openSearch(): void {
    this.router.navigate(['search/']);
  }

}

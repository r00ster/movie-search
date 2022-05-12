import { Component, HostBinding, OnInit } from '@angular/core';
import { ColorModeService } from './services/color-mode.service';
import { Observable, Observer, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

export class AppComponent implements OnInit {
  title = 'movie-search';
  private isDark: boolean = false;
  colorMode?: string;
  displayOfflineBanner: boolean = false;

  constructor(private colorModeService: ColorModeService) { }

  ngOnInit(): void {
    // Subscriptions in the Angular AppComponent do not need to be unsubscribed
    this.checkConnectionStatus$().subscribe(isOnline => {
      this.displayOfflineBanner = isOnline ? false : true;
    });
    this.colorModeService.curentColorMode.subscribe(mode => {
      this.isDark = mode === 'dark';
    });
  };

  /**
   * @description Returns an observable that emits true if the user is online
   * @returns {Observable<boolean>}
   */
  checkConnectionStatus$(): Observable<boolean> {
    return merge(
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window, 'online').pipe(map(() => true)),
      new Observable((sub: Observer<boolean>) => {
        sub.next(navigator.onLine);
        sub.complete();
      }));
  }

  /**
   * @description Get theme mode and bind the class to the host element
   * @returns {string}
   */
  @HostBinding('class')
  get themeMode(): string {
    return this.isDark ? 'theme-dark' : '';
  }
}

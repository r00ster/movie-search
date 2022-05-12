import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorModeService {
  colorMode: BehaviorSubject<string> = new BehaviorSubject('light');
  curentColorMode = this.colorMode.asObservable();

  constructor() { }

  /**
   * @description Sets the color mode
   * @param color
   * @returns {void}
   */
  setColorMode(color: string): void {
    this.colorMode.next(color);
  }
}

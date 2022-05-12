import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorModeService {
  subscribe(arg0: (colorMode: any) => any) {
    throw new Error('Method not implemented.');
  }
  colorMode: BehaviorSubject<string> = new BehaviorSubject('light');
  curentColorMode = this.colorMode.asObservable();

  constructor() { }

  setColorMode(color: string): void {
    this.colorMode.next(color);
  }
}

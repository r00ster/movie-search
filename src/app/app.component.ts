import { Component, HostBinding, OnInit } from '@angular/core';
import { ColorModeService } from './services/color-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  private isDark = false;
  colorMode?: string;

  constructor(private colorModeService: ColorModeService) { }

  ngOnInit(): void {
    this.colorModeService.curentColorMode.subscribe(mode => {
      this.isDark = mode === 'dark';
    });
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

import { Component, OnInit, } from '@angular/core';
import { ColorModeService } from 'src/app/services/color-mode.service';

@Component({
  selector: 'app-dark-mode-toggle',
  templateUrl: './dark-mode-toggle.component.html',
  styleUrls: ['./dark-mode-toggle.component.scss']
})
export class DarkModeToggleComponent implements OnInit {
  colorMode?: string;

  constructor(private colorModeService: ColorModeService) { }

  ngOnInit(): void {
    this.colorMode = localStorage.getItem('colorMode') || 'light';
    this.colorModeService.colorMode.next(this.colorMode);
  }

  /**
   * @description Emits colorModeSwitched event that includes color mode string
   * @param color
   * @returns {void}
   */
  onModeChange(color: string): void {
    this.colorModeService.setColorMode(color);
    localStorage.setItem('colorMode', color);
  }
}

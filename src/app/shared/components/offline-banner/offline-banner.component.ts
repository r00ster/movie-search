import { Component } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-offline-banner',
  templateUrl: './offline-banner.component.html',
  styleUrls: ['./offline-banner.component.scss'],
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
export class OfflineBannerComponent { }

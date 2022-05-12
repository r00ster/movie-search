import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { OfflineBannerComponent } from './components/offline-banner/offline-banner.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    OfflineBannerComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    OfflineBannerComponent,
    PageNotFoundComponent,
  ]
})
export class SharedModule { }

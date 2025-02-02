import { Component, WritableSignal } from '@angular/core';

import { LogoComponent } from './logo/logo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MediaQueryServiceService } from './media-query-service.service';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LogoComponent,
    MatButtonModule,
    MatIconModule,
    SearchComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'youtube-clone';

  isMobile: WritableSignal<boolean>;

  constructor(private mediaQueryService: MediaQueryServiceService) {
    this.isMobile = this.mediaQueryService.isMobile;
  }
}

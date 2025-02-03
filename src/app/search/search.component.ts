import { Component, WritableSignal } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MediaQueryServiceService } from '../media-query-service.service';

@Component({
  selector: 'app-search',
  imports: [MatButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  isMobile: WritableSignal<boolean>;

  constructor(private mediaQueryService: MediaQueryServiceService) {
    this.isMobile = this.mediaQueryService.isMobile;
  }
}

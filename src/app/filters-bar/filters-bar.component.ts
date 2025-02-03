import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-filters-bar',
  imports: [MatButtonModule, MatChipsModule],
  templateUrl: './filters-bar.component.html',
  styleUrl: './filters-bar.component.scss',
})
export class FiltersBarComponent {
  scrolledToStart = true;
  scrolledToEnd = false;

  onScroll(event: any) {
    const scrollLeft = event.target.scrollLeft;
    const maxScroll = event.target.scrollWidth - event.target.offsetWidth;

    this.scrolledToStart = scrollLeft === 0;
    this.scrolledToEnd = scrollLeft >= maxScroll;
  }
}

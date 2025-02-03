import { Component } from '@angular/core';
import { FiltersBarComponent } from './filters-bar/filters-bar.component';
import { LogoComponent } from './logo/logo.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LogoComponent,
    MatButtonModule,
    SearchComponent,
    SideNavComponent,
    FiltersBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'youtube-clone';
}

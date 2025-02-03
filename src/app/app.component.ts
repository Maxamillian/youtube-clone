import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LogoComponent,
    MatButtonModule,
    MatIconModule,
    SearchComponent,
    SideNavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'youtube-clone';
}

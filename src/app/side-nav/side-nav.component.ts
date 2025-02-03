import { Component } from '@angular/core';
import { NavItemComponent } from '../nav-item/nav-item.component';

@Component({
  selector: 'app-side-nav',
  imports: [NavItemComponent],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  selectedTab = 'Home';

  updateSelectedTab(tab: string) {
    this.selectedTab = tab;
  }
}

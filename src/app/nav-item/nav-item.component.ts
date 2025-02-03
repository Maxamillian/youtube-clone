import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav-item',
  imports: [MatButtonModule],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss',
})
export class NavItemComponent {
  @Input() tabName!: string;
  @Input() iconName!: string;
  @Input() selectedTab!: string;
  @Output() updateSelectedTab = new EventEmitter<string>();
  isSelected: boolean = false;

  ngOnChanges() {
    this.isSelected = this.tabName === this.selectedTab;
  }

  selectTab() {
    this.updateSelectedTab.emit(this.tabName);
  }
}

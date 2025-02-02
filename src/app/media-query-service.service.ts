import { Injectable, inject, signal } from '@angular/core';

import { MediaMatcher } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root',
})
export class MediaQueryServiceService {
  readonly isMobile = signal(true);

  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor() {
    const media = inject(MediaMatcher);

    this._mobileQuery = media.matchMedia('(max-width: 656px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () =>
      this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnDestroy() {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}

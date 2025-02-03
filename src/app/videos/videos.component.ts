import { Component } from '@angular/core';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-videos',
  imports: [VideoComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.scss',
})
export class VideosComponent {}

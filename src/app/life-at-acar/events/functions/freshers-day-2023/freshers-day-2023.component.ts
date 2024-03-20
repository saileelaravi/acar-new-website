import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-freshers-day-2023',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './freshers-day-2023.component.html',
  styleUrl: './freshers-day-2023.component.scss'
})
export class FreshersDay2023Component {
  Images: { url: string; name: string; }[]=[];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('Freshers Day 2023');
  }

  ngOnInit() {
    this.lifeAtAcarService.freshersDay_2023$.subscribe((images: { url: string; name: string; }[]) => {
      this.Images = images;
    });
  }
}

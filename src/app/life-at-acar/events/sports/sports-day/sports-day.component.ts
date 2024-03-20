import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sports-day',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sports-day.component.html',
  styleUrl: './sports-day.component.scss'
})
export class SportsDayComponent {
  Images: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('sports_day_2022');

  }

  ngOnInit() {
    this.lifeAtAcarService.sports_day_2022$.subscribe((images: { url: string; name: string; }[]) => {
      this.Images = images;
    });
  }
}

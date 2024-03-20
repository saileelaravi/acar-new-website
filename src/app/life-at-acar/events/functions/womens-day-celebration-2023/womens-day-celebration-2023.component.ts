import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-womens-day-celebration-2023',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './womens-day-celebration-2023.component.html',
  styleUrl: './womens-day-celebration-2023.component.scss'
})
export class WomensDayCelebration2023Component {
  Images: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage("Women's Day Celebration 2023");

  }

  ngOnInit() {
    this.lifeAtAcarService.Womens_Day_Celebration_2023$.subscribe((images: { url: string; name: string; }[]) => {
      this.Images = images;
    });
  }
}

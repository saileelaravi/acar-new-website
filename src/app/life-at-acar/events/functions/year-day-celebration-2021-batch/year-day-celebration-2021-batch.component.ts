import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-year-day-celebration-2021-batch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './year-day-celebration-2021-batch.component.html',
  styleUrl: './year-day-celebration-2021-batch.component.scss'
})
export class YearDayCelebration2021BatchComponent {
  Images: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage("Year Day Celebration - 2021 Batch");

  }

  ngOnInit() {
    this.lifeAtAcarService.Year_Day_Celebration_2021_Batch$.subscribe((images: { url: string; name: string; }[]) => {
      this.Images = images;
    });
  }
}

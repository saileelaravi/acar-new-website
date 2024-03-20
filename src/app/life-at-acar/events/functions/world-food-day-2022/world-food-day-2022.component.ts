import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-world-food-day-2022',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './world-food-day-2022.component.html',
  styleUrl: './world-food-day-2022.component.scss'
})
export class WorldFoodDay2022Component {
  Images: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage("World Food Day 2022");
  }

  ngOnInit() {
    this.lifeAtAcarService.world_food_day_2022$.subscribe((images: { url: string; name: string; }[]) => {
      this.Images = images;
    });
  }
}

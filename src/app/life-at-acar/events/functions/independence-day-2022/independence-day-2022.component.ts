import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-independence-day-2022',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './independence-day-2022.component.html',
  styleUrl: './independence-day-2022.component.scss'
})
export class IndependenceDay2022Component {
  Images: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage("Independence Day 2022");

  }

  ngOnInit() {
    this.lifeAtAcarService.Independence_Day_2022$.subscribe((images: { url: string; name: string; }[]) => {
      this.Images = images;
    });
  }
}

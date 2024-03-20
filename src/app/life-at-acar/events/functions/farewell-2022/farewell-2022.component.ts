import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-farewell-2022',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './farewell-2022.component.html',
  styleUrl: './farewell-2022.component.scss'
})
export class Farewell2022Component {
  Images: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage("Farewell 2022");

  }

  ngOnInit() {
    this.lifeAtAcarService.farewell_2022$.subscribe((images: { url: string; name: string; }[]) => {
      this.Images = images;
    });
  }
}

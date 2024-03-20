import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agriculture-innovation-competition',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agriculture-innovation-competition.component.html',
  styleUrl: './agriculture-innovation-competition.component.scss'
})
export class AgricultureInnovationCompetitionComponent {
  Images: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage("Agriculture Innovation Competition");

  }

  ngOnInit() {
    this.lifeAtAcarService.agriculture_Innovation_Competition$.subscribe((images: { url: string; name: string; }[]) => {
      this.Images = images;
    });
  }
}

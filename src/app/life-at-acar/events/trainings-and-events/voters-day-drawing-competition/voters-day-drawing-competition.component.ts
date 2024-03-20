import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voters-day-drawing-competition',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voters-day-drawing-competition.component.html',
  styleUrl: './voters-day-drawing-competition.component.scss'
})
export class VotersDayDrawingCompetitionComponent {
  votersDayDrawingCompetationImages: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('voters-day');

  }

  ngOnInit() {
    this.lifeAtAcarService.votersDay$.subscribe((images: { url: string; name: string; }[]) => {
      this.votersDayDrawingCompetationImages = images;
    });
  }
}

import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inter-collegiate-tournament-coimbatore',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inter-collegiate-tournament-coimbatore.component.html',
  styleUrl: './inter-collegiate-tournament-coimbatore.component.scss'
})
export class InterCollegiateTournamentCoimbatoreComponent {
  Images: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('inter_college_tournament_2022-coimbatore');

  }

  ngOnInit() {
    this.lifeAtAcarService.inter_college_tournament_2022_coimbatore$.subscribe((images: { url: string; name: string; }[]) => {
      this.Images = images;
    });
  }
}

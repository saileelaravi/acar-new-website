import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tanflora-visit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tanflora-visit.component.html',
  styleUrl: './tanflora-visit.component.scss'
})
export class TanfloraVisitComponent {
  tanflorVisitImages: { url: string; name: string; }[]=[];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('tanflor_visit');

  }

  ngOnInit() {
    this.lifeAtAcarService.tanflorVisit$.subscribe((images: { url: string; name: string; }[]) => {
      this.tanflorVisitImages = images;
    });
  }

}

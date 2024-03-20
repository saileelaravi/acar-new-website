import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tnaustanding-committee-visit-2022',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tnaustanding-committee-visit-2022.component.html',
  styleUrl: './tnaustanding-committee-visit-2022.component.scss'
})
export class TNAUStandingCommitteeVisit2022Component {
  Images: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage("TNAU Standing Committee Visit 2022");

  }

  ngOnInit() {
    this.lifeAtAcarService.TNAU_Standing_Committee_Visit_2022$.subscribe((images: { url: string; name: string; }[]) => {
      this.Images = images;
    });
  }
}

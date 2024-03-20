import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prasettipalli',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prasettipalli.component.html',
  styleUrl: './prasettipalli.component.scss'
})
export class PRASettipalliComponent {
  PRASettipalliImages: { url: string; name: string; }[]=[];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('PRA Settipalli');

  }

  ngOnInit() {
    this.lifeAtAcarService.PRASettipalli$.subscribe((images: { url: string; name: string; }[]) => {
      this.PRASettipalliImages = images;
    });
  }
}

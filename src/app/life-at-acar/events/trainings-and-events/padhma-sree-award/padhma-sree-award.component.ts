import { Component, OnInit } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-padhma-sree-award',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './padhma-sree-award.component.html',
  styleUrl: './padhma-sree-award.component.scss'
})
export class PadhmaSreeAwardComponent implements OnInit {
  padhmaSreeAwardImages: { url: string; name: string; }[] = [];

  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('PADHMASREE- AWARD');
  }

  ngOnInit() {
    this.lifeAtAcarService.padhmaSreeAward$.subscribe((images: { url: string; name: string; }[]) => {
      this.padhmaSreeAwardImages = images;
      console.log(images);
      
      
    });
  }

}

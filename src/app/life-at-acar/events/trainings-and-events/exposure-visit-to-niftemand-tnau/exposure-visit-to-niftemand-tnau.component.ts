import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exposure-visit-to-niftemand-tnau',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exposure-visit-to-niftemand-tnau.component.html',
  styleUrl: './exposure-visit-to-niftemand-tnau.component.scss'
})
export class ExposureVisitToNIFTEMAndTNAUComponent {
  exposureVisitToNIFTEMTNAUImages: { url: string; name: string; }[]=[];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('Exposure Visit to NIFTEM, TNAU');

  }

  ngOnInit() {
    this.lifeAtAcarService.exposureVisitToNIFTEMTNAU$.subscribe((images: { url: string; name: string; }[]) => {
      this.exposureVisitToNIFTEMTNAUImages = images;
    });
  }
}

import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-educational-awarness',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './educational-awarness.component.html',
  styleUrl: './educational-awarness.component.scss'
})
export class EducationalAwarnessComponent {
  educationalAwarnessImages: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('eductional-awarness');
  }

  ngOnInit() {
    this.lifeAtAcarService.eductionalAwarness$.subscribe((images: { url: string; name: string; }[]) => {
      this.educationalAwarnessImages = images;
      console.log(images);
      
      
    });
  }
}

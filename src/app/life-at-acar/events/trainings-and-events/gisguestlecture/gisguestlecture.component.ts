import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gisguestlecture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gisguestlecture.component.html',
  styleUrl: './gisguestlecture.component.scss'
})
export class GISGuestlectureComponent {
  GISGuestlectureImages: { url: string; name: string; }[]=[];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('GIS Guest lecture');

  }

  ngOnInit() {
    this.lifeAtAcarService.GISGuestlecture$.subscribe((images: { url: string; name: string; }[]) => {
      this.GISGuestlectureImages = images;
    });
  }
}

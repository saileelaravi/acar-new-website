import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { LifeAtAcarService } from '../service/life-at-acar.service';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-hostel',
  standalone: true,
  imports: [CommonModule, GalleriaModule, CarouselModule],
  templateUrl: './hostel.component.html',
  styleUrl: './hostel.component.scss'
})
export class HostelComponent {
  responsiveOptions: any[] = [];
  hostelImages: { url: string; name: string; }[] = [];
  displayCustom: boolean = false;

  activeIndex: number = 0;

  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('hostel');


    this.lifeAtAcarService.hostel$.subscribe((images: { url: string; name: string; }[]) => {
      this.hostelImages = images
      console.log(images)

    });
  }
  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
}
}

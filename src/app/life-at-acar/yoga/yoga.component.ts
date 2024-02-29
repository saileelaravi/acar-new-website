import { Component } from '@angular/core';
import { LifeAtAcarService } from '../service/life-at-acar.service';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-yoga',
  standalone: true,
  imports: [CommonModule, GalleriaModule,],
  templateUrl: './yoga.component.html',
  styleUrl: './yoga.component.scss'
})
export class YogaComponent {
  responsiveOptions: any[] = [];
  yogaImages: { url: string; name: string; }[] = [];
  displayCustom: boolean = false;

  activeIndex: number = 0;

  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('yoga');


    this.lifeAtAcarService.yoga$.subscribe((images: { url: string; name: string; }[]) => {
      this.yogaImages = images
      console.log(images)

    });
  }
  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
}

}

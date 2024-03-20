import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { LifeAtAcarService } from '../../service/life-at-acar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [CommonModule, GalleriaModule, CarouselModule],
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.scss'
})
export class SportsComponent {
  responsiveOptions: any[] = [];
  displayCustom: boolean = false;
  activeIndex: number = 0;
  friendlyMatchbwAcarandHorticultureImages: { url: string; name: string; }[] = [];
  inter_college_tournament_2022_coimbatoreImages: { url: string; name: string; }[] = [];
  sports_day_2022Images: { url: string; name: string; }[] = [];

  constructor(private lifeAtAcarService: LifeAtAcarService, private router: Router) {
    this.lifeAtAcarService.readFilesFromStorage('friendly_match_bw_acar_and_horticulture_college');
    this.lifeAtAcarService.readFilesFromStorage('inter_college_tournament_2022-coimbatore');
    this.lifeAtAcarService.readFilesFromStorage('sports_day_2022');

    this.lifeAtAcarService.friendlyMatchbwAcarandHorticulture$.subscribe((images: { url: string; name: string; }[]) => {
      this.friendlyMatchbwAcarandHorticultureImages = images
    });
    this.lifeAtAcarService.inter_college_tournament_2022_coimbatore$.subscribe((images: { url: string; name: string; }[]) => {
      this.inter_college_tournament_2022_coimbatoreImages = images
    });
    this.lifeAtAcarService.sports_day_2022$.subscribe((images: { url: string; name: string; }[]) => {
      this.sports_day_2022Images = images
    });
  }


  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }
  redirectToPage(path: any) {
    this.router.navigateByUrl(`life-at-acar/${path}`)
  }
  ngOnDestroy() {
    this.lifeAtAcarService.clearImages();
  }
}

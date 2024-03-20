import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { LifeAtAcarService } from '../../service/life-at-acar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-functions',
  standalone: true,
  imports: [CommonModule, GalleriaModule, CarouselModule],
  templateUrl: './functions.component.html',
  styleUrl: './functions.component.scss'
})
export class FunctionsComponent {
  responsiveOptions: any[] = [];
  displayCustom: boolean = false;
  activeIndex: number = 0;

  teachersDaycelbImages: { url: string; name: string; }[] = [];
  administrative_Office_Opening_2023Images: { url: string; name: string; }[] = [];
  muthamizh_Vizha_2023Images: { url: string; name: string; }[] = [];
  freshersDay_2023Images: { url: string; name: string; }[] = [];
  Womens_Day_Celebration_2023Images: { url: string; name: string; }[] = [];
  Year_Day_Celebration_2021_BatchImages: { url: string; name: string; }[] = [];
  TNAU_Standing_Committee_Visit_2022Images: { url: string; name: string; }[] = [];
  Parents_Teachers_Meeting_2022Images: { url: string; name: string; }[] = [];
  Independence_Day_2022Images: { url: string; name: string; }[] = [];
  agriculture_Innovation_CompetitionImages: { url: string; name: string; }[] = [];
  club_day_and_hostel_day_2022Images: { url: string; name: string; }[] = [];
  farewell_2022Images: { url: string; name: string; }[] = [];
  pongalImages: { url: string; name: string; }[] = [];
  world_food_day_2022Images: { url: string; name: string; }[] = [];
  saraswathi_puja_2022Images: { url: string; name: string; }[] = [];

  constructor(private lifeAtAcarService: LifeAtAcarService, private router: Router) {
    this.lifeAtAcarService.readFilesFromStorage('Teachers Day Celebration 2023');
    this.lifeAtAcarService.readFilesFromStorage('ACAR Administrative Office Opening 2023');
    this.lifeAtAcarService.readFilesFromStorage('Muthamizh Vizha 2023');
    this.lifeAtAcarService.readFilesFromStorage('Freshers Day 2023');
    this.lifeAtAcarService.readFilesFromStorage("Women's Day Celebration 2023");
    this.lifeAtAcarService.readFilesFromStorage("Year Day Celebration - 2021 Batch");
    this.lifeAtAcarService.readFilesFromStorage("TNAU Standing Committee Visit 2022");
    this.lifeAtAcarService.readFilesFromStorage("Parents Teachers Meeting 2022");
    this.lifeAtAcarService.readFilesFromStorage("Independence Day 2022");
    this.lifeAtAcarService.readFilesFromStorage("Agriculture Innovation Competition");
    this.lifeAtAcarService.readFilesFromStorage("Club Day and Hostel Day 2022");
    this.lifeAtAcarService.readFilesFromStorage("Farewell 2022");
    this.lifeAtAcarService.readFilesFromStorage("Pongal");
    this.lifeAtAcarService.readFilesFromStorage("World Food Day 2022");
    this.lifeAtAcarService.readFilesFromStorage("Saraswathi Puja 2022");



    this.lifeAtAcarService.teachersDaycelb$.subscribe((images: { url: string; name: string; }[]) => {
      this.teachersDaycelbImages = images
    });
    this.lifeAtAcarService.Administrative_Office_Opening_2023$.subscribe((images: { url: string; name: string; }[]) => {
      this.administrative_Office_Opening_2023Images = images
    });
    this.lifeAtAcarService.muthamizh_Vizha_2023$.subscribe((images: { url: string; name: string; }[]) => {
      this.muthamizh_Vizha_2023Images = images
    });
    this.lifeAtAcarService.freshersDay_2023$.subscribe((images: { url: string; name: string; }[]) => {
      this.freshersDay_2023Images = images
    });
    this.lifeAtAcarService.Womens_Day_Celebration_2023$.subscribe((images: { url: string; name: string; }[]) => {
      this.Womens_Day_Celebration_2023Images = images
    });
    this.lifeAtAcarService.Year_Day_Celebration_2021_Batch$.subscribe((images: { url: string; name: string; }[]) => {
      this.Year_Day_Celebration_2021_BatchImages = images
    });
    this.lifeAtAcarService.TNAU_Standing_Committee_Visit_2022$.subscribe((images: { url: string; name: string; }[]) => {
      this.TNAU_Standing_Committee_Visit_2022Images = images
    });
    this.lifeAtAcarService.Parents_Teachers_Meeting_2022$.subscribe((images: { url: string; name: string; }[]) => {
      this.Parents_Teachers_Meeting_2022Images = images
    });
    this.lifeAtAcarService.Independence_Day_2022$.subscribe((images: { url: string; name: string; }[]) => {
      this.Independence_Day_2022Images = images
    });
    this.lifeAtAcarService.agriculture_Innovation_Competition$.subscribe((images: { url: string; name: string; }[]) => {
      this.agriculture_Innovation_CompetitionImages = images
    });
    this.lifeAtAcarService.club_day_and_hostel_day_2022$.subscribe((images: { url: string; name: string; }[]) => {
      this.club_day_and_hostel_day_2022Images = images
    });
    this.lifeAtAcarService.farewell_2022$.subscribe((images: { url: string; name: string; }[]) => {
      this.farewell_2022Images = images
      console.log(images)

    });
    this.lifeAtAcarService.pongal$.subscribe((images: { url: string; name: string; }[]) => {
      this.pongalImages = images
    });
    this.lifeAtAcarService.world_food_day_2022$.subscribe((images: { url: string; name: string; }[]) => {
      this.world_food_day_2022Images = images
    });
    this.lifeAtAcarService.saraswathi_puja_2022$.subscribe((images: { url: string; name: string; }[]) => {
      this.saraswathi_puja_2022Images = images
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

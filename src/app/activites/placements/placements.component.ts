import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ActivitesService } from '../service/activites.service';

@Component({
  selector: 'app-placements',
  standalone: true,
  imports: [CommonModule, GalleriaModule, CarouselModule],
  templateUrl: './placements.component.html',
  styleUrl: './placements.component.scss'
})
export class PlacementsComponent {
  placed_students = [
    { position: 'Agricultural officer', id: 'ID NO 2016042008' },
    { position: 'Agricultural officer', id: 'ID NO 2016042077' },
    { position: 'Agricultural officer', id: 'ID NO 2016042083' },
    { position: 'Agricultural officer', id: 'ID NO 2016042110' }
  ]
  responsiveOptions: any[] = [];
  displayCustom: boolean = false;
  activeIndex: number = 0;
  jobPlacementsImages: { url: string; name: string; id: string; }[] = [];
  showOnlyjobPlacements: boolean = true;
  tnau_higher_studies_2016_batchImages: { url: string; name: string; }[]=[];
  tnau_higher_studies_2017_batchImages: { url: string; name: string; }[]=[];
  other_higher_education_institutionsImages: { url: string; name: string; }[]=[];

  constructor(private activitieService: ActivitesService) {
    var currentUrl = window.location.href;

    // Check if the URL contains the substring
    if (currentUrl.includes("activites/placements")) {
      this.showOnlyjobPlacements = false
    } else {
      this.showOnlyjobPlacements = true

    }

    for (let i = 0; i < this.placed_students.length; i++) {
      const student = this.placed_students[i];
      this.activitieService.readFilesFromStorage(`job_placements/${student.id.split(' ')[2]}`, student.position, student.id);
    }
    this.activitieService.readFilesFromStorage('tnau_higher_studies_2016_batch');
    this.activitieService.readFilesFromStorage('tnau_higher_studies_2017_batch');
    this.activitieService.readFilesFromStorage('other_higher_education_institutions');


    this.activitieService.jobPlacements$.subscribe((images) => {
      this.jobPlacementsImages = images
    });
    this.activitieService.tnau_higher_studies_2016_batch$.subscribe((images) => {
      this.tnau_higher_studies_2016_batchImages = images
    });
    this.activitieService.tnau_higher_studies_2017_batch$.subscribe((images) => {
      this.tnau_higher_studies_2017_batchImages = images
    });
    this.activitieService.other_higher_education_institutions$.subscribe((images) => {
      this.other_higher_education_institutionsImages = images
    });
  }
  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }
}

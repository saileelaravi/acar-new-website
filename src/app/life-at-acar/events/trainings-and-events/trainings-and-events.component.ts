import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { LifeAtAcarService } from '../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainings-and-events',
  standalone: true,
  imports: [CommonModule, GalleriaModule, CarouselModule],
  templateUrl: './trainings-and-events.component.html',
  styleUrl: './trainings-and-events.component.scss'
})
export class TrainingsAndEventsComponent {
  responsiveOptions: any[] = [];
  displayCustom: boolean = false;
  activeIndex: number = 0;

  padhmaSreeAwardImages: { url: string; name: string; }[] = [];
  tanflorVisitImages: { url: string; name: string; }[] = [];
  eductionalAwarnessImages: { url: string; name: string; }[] = [];
  votersDayImages: { url: string; name: string; }[] = [];
  nssDayImages: { url: string; name: string; }[] = [];
  dengueAwarenessProgramImages: { url: string; name: string; }[] = [];
  graduationImages: { url: string; name: string; }[] = [];
  aluminiMeetImages: { url: string; name: string; }[] = [];
  breedingManagementInCattleImages: { url: string; name: string; }[]=[];
  awarenessProgrammeOnHigherEducationforSchoolStudentsImages: { url: string; name: string; }[] =[];
  exposureVisitToNIFTEMTNAUImages: { url: string; name: string; }[]=[];
  PRASettipalliImages: { url: string; name: string; }[] =[];
  trainingonIntegratedCropManagementImages: { url: string; name: string; }[] =[];
  ERISilkwormTraining2022Images: { url: string; name: string; }[]=[];
  GISGuestlectureImages: { url: string; name: string; }[]=[];

  constructor(private lifeAtAcarService: LifeAtAcarService, private router: Router) {
    this.lifeAtAcarService.readFilesFromStorage('PADHMASREE- AWARD');
    this.lifeAtAcarService.readFilesFromStorage('tanflor_visit');
    this.lifeAtAcarService.readFilesFromStorage('eductional-awarness');
    this.lifeAtAcarService.readFilesFromStorage('voters-day');
    this.lifeAtAcarService.readFilesFromStorage('nss-day');
    this.lifeAtAcarService.readFilesFromStorage('dengue-awareness-program');
    this.lifeAtAcarService.readFilesFromStorage('graduation-celebration');
    this.lifeAtAcarService.readFilesFromStorage('acar-alumini-meet');
    this.lifeAtAcarService.readFilesFromStorage('Breeding Management in Cattle');
    this.lifeAtAcarService.readFilesFromStorage('Awareness Programme on Higher Education for School Students');
    this.lifeAtAcarService.readFilesFromStorage('Exposure Visit to NIFTEM, TNAU');
    this.lifeAtAcarService.readFilesFromStorage('PRA Settipalli');
    this.lifeAtAcarService.readFilesFromStorage('Training on Integrated Crop Management');
    this.lifeAtAcarService.readFilesFromStorage('ERI Silkworm Training 2022');
    this.lifeAtAcarService.readFilesFromStorage('GIS Guest lecture');




    this.lifeAtAcarService.padhmaSreeAward$.subscribe((images: { url: string; name: string; }[]) => {
      this.padhmaSreeAwardImages = images
    });
    this.lifeAtAcarService.tanflorVisit$.subscribe((images: { url: string; name: string; }[]) => {
      this.tanflorVisitImages = images
    });
    this.lifeAtAcarService.eductionalAwarness$.subscribe((images: { url: string; name: string; }[]) => {
      this.eductionalAwarnessImages = images
    });
    this.lifeAtAcarService.votersDay$.subscribe((images: { url: string; name: string; }[]) => {
      this.votersDayImages = images
    });
    this.lifeAtAcarService.nssDay$.subscribe((images: { url: string; name: string; }[]) => {
      this.nssDayImages = images
    });
    this.lifeAtAcarService.dengueAwareness$.subscribe((images: { url: string; name: string; }[]) => {
      this.dengueAwarenessProgramImages = images
    });
    this.lifeAtAcarService.graduation$.subscribe((images: { url: string; name: string; }[]) => {
      this.graduationImages = images

    });
    this.lifeAtAcarService.aluminiMeet$.subscribe((images: { url: string; name: string; }[]) => {
      this.aluminiMeetImages = images
    });
    this.lifeAtAcarService.breedingManagementInCattle$.subscribe((images: { url: string; name: string; }[]) => {
      this.breedingManagementInCattleImages = images
    });
    this.lifeAtAcarService.awarenessProgrammeOnHigherEducationforSchoolStudents$.subscribe((images: { url: string; name: string; }[]) => {
      this.awarenessProgrammeOnHigherEducationforSchoolStudentsImages = images
    });
    this.lifeAtAcarService.exposureVisitToNIFTEMTNAU$.subscribe((images: { url: string; name: string; }[]) => {
      this.exposureVisitToNIFTEMTNAUImages = images
    });
    this.lifeAtAcarService.PRASettipalli$.subscribe((images: { url: string; name: string; }[]) => {
      this.PRASettipalliImages = images
    });
    this.lifeAtAcarService.trainingonIntegratedCropManagement$.subscribe((images: { url: string; name: string; }[]) => {
      this.trainingonIntegratedCropManagementImages = images
    });
    this.lifeAtAcarService.ERISilkwormTraining2022$.subscribe((images: { url: string; name: string; }[]) => {
      this.ERISilkwormTraining2022Images = images
    });
    this.lifeAtAcarService.GISGuestlecture$.subscribe((images: { url: string; name: string; }[]) => {
      this.GISGuestlectureImages = images
      console.log(images);
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

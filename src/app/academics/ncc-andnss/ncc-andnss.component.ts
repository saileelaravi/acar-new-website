import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { AcademicsService } from '../service/academics.service';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ncc-andnss',
  standalone: true,
  imports: [GalleriaModule, ImageModule, NgbAccordionModule],
  templateUrl: './ncc-andnss.component.html',
  styleUrl: './ncc-andnss.component.scss'
})
export class NccAndnssComponent {
  responsiveOptions: any[] = [];

  nssDayTreePlantingImages: { url: string; name: string; }[] = [];
  azadiKaAmritMahotsavImages: { url: string; name: string; }[] = [];
  worlFoodDayImages: { url: string; name: string; }[] =[];
  wasteDisposalCampaignImages: { url: string; name: string; }[] = [];

  constructor(private academicsService: AcademicsService) {
    this.academicsService.readFilesFromStorage('NSS-day-tree-planting');
    this.academicsService.readFilesFromStorage('Azadi-Ka-Amrit-Mahotsav');
    this.academicsService.readFilesFromStorage('waste-disposal-campaign');
    this.academicsService.readFilesFromStorage('worldFoodDay');


    this.academicsService.nssDayTreePlanting$.subscribe((images: { url: string; name: string; }[]) => {
      this.nssDayTreePlantingImages = images
    });
    this.academicsService.azadiKaAmritMahotsav$.subscribe((images: { url: string; name: string; }[]) => {
      this.azadiKaAmritMahotsavImages = images
    });
    this.academicsService.wasteDisposalCampaign$.subscribe((images: { url: string; name: string; }[]) => {
      this.wasteDisposalCampaignImages = images
    });
    this.academicsService.worldFoodDay$.subscribe((images: { url: string; name: string; }[]) => {
      this.worlFoodDayImages = images
    });
  }



}

import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-plant-breeding',
  standalone: true,
  imports: [CarouselModule,DialogModule],
  templateUrl: './plant-breeding.component.html',
  styleUrl: './plant-breeding.component.scss'
})
export class PlantBreedingComponent {
  products = [
    { url: 'assets/Gel-Electrophoresis-254x300.jpg', title: 'Gel Electrophoresis' },
    { url: 'assets/GPB-Lab-254x300.jpg', title: 'GPB Lab' },
    { url: 'assets/Observing-different-phases-of-cell-division-254x300.jpg', title: 'Observing different phases of cell-division' },
    { url: 'assets/Observing-Mitotic-Phase-254x300.jpg', title: 'Observing Mitotic Phase' },
    { url: 'assets/Purity-analysis-of-seeds-in-rice-254x300.jpg', title: 'Purity analysis of seeds in rice' },
    { url: 'assets/Rice-landraces-254x300.jpg', title: 'Rice landraces' },

  ]
  hybridization_in_bhendi = [
    { url: 'assets/Emasculated-flower-254x300.jpg', title: 'Emasculated flower' },
    { url: 'assets/Hybridization-in-Bhendi-254x300.jpg', title: 'Hybridization in Bhendi' },
    { url: 'assets/Removing-the-anthers-along-with-petals-254x300.jpg', title: 'Removing the anthers along with petals' },
    { url: 'assets/selection-of-buds-254x300.jpg', title: 'selection of buds' },
    { url: 'assets/Tagging-and-bagging-254x300.jpg', title: 'Tagging and bagging' },

  ]
  breeding_exposure_visits = [
    { url: 'assets/AICRIP-trials-in-pulses.jpg', title: 'AICRIP trials in pulses' },
    { url: 'assets/Breeder-seed-production-in-Rice.jpg', title: 'Breeder seed production in Rice' },
    { url: 'assets/IFGTB.jpg', title: 'IFGTB' },
    { url: 'assets/Ramiah-Gene-bank.jpg', title: 'Ramiah Gene bank' },
    { url: 'assets/RRS-Paiyur.jpg', title: 'RRS Paiyur' },
    { url: 'assets/Sugarcane-Breeding-Institute.jpg', title: 'Sugarcane Breeding Institute' },

  ]

  responsiveOptions!: any[];
  dialogVisible: boolean = false;

  showDialog() {
    this.dialogVisible = true;
  }

}

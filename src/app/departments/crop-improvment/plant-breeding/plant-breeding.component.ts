import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-plant-breeding',
  standalone: true,
  imports: [CarouselModule, DialogModule],
  templateUrl: './plant-breeding.component.html',
  styleUrl: './plant-breeding.component.scss'
})

export class PlantBreedingComponent {
  plant_breeading_dept_img: { url: string; name: string; }[] = [];
  hybridizatio_in_bhendi_plant_breeding_dept_img: { url: string; name: string; }[] = [];
  breeding_Exposure_Visits_dept_img_dept_img: { url: string; name: string; }[] = [];

  constructor(private departmentService: DepartmentService) {
    this.departmentService.readFilesFromStorage('plant_breeading_dept_img');
    this.departmentService.readFilesFromStorage('hybridizatio_ in_bhendi_plant_breeding_dept_img');
    this.departmentService.readFilesFromStorage('Breeding_Exposure_Visits_dept_img');


    this.departmentService.plant_breeading_dept_img$.subscribe((images: { url: string; name: string; }[]) => {
      this.plant_breeading_dept_img = images
    });
    this.departmentService.hybridizatio_in_bhendi_plant_breeding_dept_img$.subscribe((images: { url: string; name: string; }[]) => {
      this.hybridizatio_in_bhendi_plant_breeding_dept_img = images
    });
    this.departmentService.breeding_Exposure_Visits_dept_img_dept_img$.subscribe((images: { url: string; name: string; }[]) => {
      this.breeding_Exposure_Visits_dept_img_dept_img = images
      console.log(images);
    });
  }


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

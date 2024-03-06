import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'primeng/carousel';
import { DepartmentService } from '../service/department.service';

@Component({
  selector: 'app-animal-husbandry',
  standalone: true,
  imports: [NgbAccordionModule, CarouselModule],
  templateUrl: './animal-husbandry.component.html',
  styleUrl: './animal-husbandry.component.scss',
  host: { ngSkipHydration: 'true' },
})
export class AnimalHusbandryComponent {
  responsiveOptions: any[] = [];
  animal_husbandry_deptImages: { url: string; name: string; }[] = [];
  poultry_dept_Images: { url: string; name: string; }[] = [];

  constructor(private departmentService: DepartmentService) {
    this.departmentService.readFilesFromStorage('animal_husbandry_dept_img');
    this.departmentService.readFilesFromStorage('poultry_dept_img');

    this.departmentService.animal_husbandry_dept_img$.subscribe((images: { url: string; name: string; }[]) => {
      this.animal_husbandry_deptImages = images
    });

    this.departmentService.poultry_dept_img$.subscribe((images: { url: string; name: string; }[]) => {
      this.poultry_dept_Images = images
    });
  }
}

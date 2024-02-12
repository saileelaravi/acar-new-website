import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { DepartmentService } from '../service/department.service';

@Component({
  selector: 'app-horticulture',
  standalone: true,
  imports: [ImageModule, GalleriaModule],
  templateUrl: './horticulture.component.html',
  styleUrl: './horticulture.component.scss'
})
export class HorticultureComponent {
  responsiveOptions: any[] = [];
  graftingAndLayeringImages: { url: string; name: string; }[]=[];
  herbalGardenImages: { url: string; name: string; }[]=[];
  mistChamberImages: { url: string; name: string; }[]=[];
  nurseryImages: { url: string; name: string; }[]=[];
  polyhouseImages: { url: string; name: string; }[]=[];
  FloricultureAndLandscapingImages: { url: string; name: string; }[]=[];

  constructor(private departmentService: DepartmentService) {
    this.departmentService.readFilesFromStorage('grafting-and-layering');
    this.departmentService.readFilesFromStorage('herbalGarden');
    this.departmentService.readFilesFromStorage('MistChamber');
    this.departmentService.readFilesFromStorage('Nursery');
    this.departmentService.readFilesFromStorage('Polyhouse');
    this.departmentService.readFilesFromStorage('Floriculture-and-Landscaping');




      // Subscribe to changes in the arrays
      this.departmentService.graftingAndLayering$.subscribe((images: { url: string; name: string; }[]) => {
        this.graftingAndLayeringImages = images;
      });
      this.departmentService.herbalgarden$.subscribe((images: { url: string; name: string; }[]) => {
        this.herbalGardenImages = images;
      });
      this.departmentService.mistChamber$.subscribe((images: { url: string; name: string; }[]) => {
        this.mistChamberImages = images;
      });
      this.departmentService.nursery$.subscribe((images: { url: string; name: string; }[]) => {
        this.nurseryImages = images;
      });
      this.departmentService.polyhouse$.subscribe((images: { url: string; name: string; }[]) => {
        this.polyhouseImages = images;
      });
      this.departmentService.FloricultureAndLandscaping$.subscribe((images: { url: string; name: string; }[]) => {
        this.FloricultureAndLandscapingImages = images;
      });
  }

}

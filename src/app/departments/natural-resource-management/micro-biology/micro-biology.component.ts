import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-micro-biology',
  standalone: true,
  imports: [ImageModule, GalleriaModule,DialogModule ],
  templateUrl: './micro-biology.component.html',
  styleUrl: './micro-biology.component.scss'
})
export class MicroBiologyComponent {
  dialogVisible: boolean = false;
  responsiveOptions: any[] = [];
  microbialIsolationImages: { url: string; name: string; }[]=[];
  azollaImages: { url: string; name: string; }[]=[];
  microbialculturesImages: { url: string; name: string; }[]=[];
  bioProductsImages: { url: string; name: string; }[]=[];

  constructor(private departmentService: DepartmentService) {
    this.departmentService.readFilesFromStorage('Microbial-Isolation');
    this.departmentService.readFilesFromStorage('Azolla');
    this.departmentService.readFilesFromStorage('Microbial-cultures');
    this.departmentService.readFilesFromStorage('bio-products');




     // Subscribe to changes in the arrays
     this.departmentService.microbialIsolation$.subscribe((images: { url: string; name: string; }[]) => {
      this.microbialIsolationImages = images;
    });
    this.departmentService.azolla$.subscribe((images: { url: string; name: string; }[]) => {
      this.azollaImages = images;
    });
    this.departmentService.microbialcultures$.subscribe((images: { url: string; name: string; }[]) => {
      this.microbialculturesImages = images;
    });
    this.departmentService.bioProducts$.subscribe((images: { url: string; name: string; }[]) => {
      this.bioProductsImages = images;
    });

  }

  showDialog() {
    this.dialogVisible = true;
  }

}

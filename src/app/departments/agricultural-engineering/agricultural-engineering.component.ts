import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DepartmentService } from '../service/department.service';

@Component({
  selector: 'app-agricultural-engineering',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './agricultural-engineering.component.html',
  styleUrl: './agricultural-engineering.component.scss'
})
export class AgriculturalEngineeringComponent {
  responsiveOptions: any[]=[];
  agriculture_engn_deptImages: { url: string; name: string; }[]=[];

  constructor(private departmentService: DepartmentService) {
    this.departmentService.readFilesFromStorage('agriculture_engn_dept_img');

    this.departmentService.agriculture_engn_dept_img$.subscribe((images: { url: string; name: string; }[]) => {
      this.agriculture_engn_deptImages = images
      console.log(images);
      
    });
  }
  


}

import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-seed-science',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './seed-science.component.html',
  styleUrl: './seed-science.component.scss'
})
export class SeedScienceComponent {
  responsiveOptions: any[]=[];
  seed_science_dept_img: { url: string; name: string; }[] = [];

  constructor(private departmentService: DepartmentService) {
    this.departmentService.readFilesFromStorage('seed_science_dept_img');

    this.departmentService.seed_science_dept_img$.subscribe((images: { url: string; name: string; }[]) => {
      this.seed_science_dept_img = images
      console.log(images);
      
    });
  }



}

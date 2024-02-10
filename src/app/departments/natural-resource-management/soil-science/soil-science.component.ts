import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { DepartmentService } from '../../service/department.service';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-soil-science',
  standalone: true,
  imports: [ImageModule, GalleriaModule,DialogModule,CarouselModule ],
  templateUrl: './soil-science.component.html',
  styleUrl: './soil-science.component.scss'
})
export class SoilScienceComponent {
  dialogVisible: boolean = false;
  responsiveOptions: any[] = [];

  soilScienceStudentActivitesImages: { url: string; name: string; }[]=[];
  acarFertilityStatusImages: { url: string; name: string; }[]=[];

  constructor(private departmentService: DepartmentService) {
    this.departmentService.readFilesFromStorage('soil-science-students-activites');
    this.departmentService.readFilesFromStorage('acar-fertility-status');


      // Subscribe to changes in the arrays
      this.departmentService.soilScienceStudentsActivities$.subscribe((images: { url: string; name: string; }[]) => {
        this.soilScienceStudentActivitesImages = images;
      });
      this.departmentService.acarFertilityStatus$.subscribe((images: { url: string; name: string; }[]) => {
        this.acarFertilityStatusImages = images;
      });
  }
  showDialog() {
    this.dialogVisible = true;
  }
}

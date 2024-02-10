import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-environmental-science',
  standalone: true,
  imports: [ImageModule, GalleriaModule,DialogModule ],
  templateUrl: './environmental-science.component.html',
  styleUrl: './environmental-science.component.scss'
})
export class EnvironmentalScienceComponent {
  dialogVisible: boolean = false;
  responsiveOptions: any[] = [];
  environmentalScienceStudentsActiviesImages: { url: string; name: string; }[]=[];

  constructor(private departmentService: DepartmentService) {
    this.departmentService.readFilesFromStorage('environmentalScienceStudentsActivies');

      // Subscribe to changes in the arrays
      this.departmentService.environmentalScienceStudentsActivies$.subscribe((images: { url: string; name: string; }[]) => {
        this.environmentalScienceStudentsActiviesImages = images;
      });
  }

}

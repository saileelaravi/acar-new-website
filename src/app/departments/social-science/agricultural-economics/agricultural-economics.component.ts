import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-agricultural-economics',
  standalone: true,
  imports: [ImageModule, GalleriaModule,DialogModule],
  templateUrl: './agricultural-economics.component.html',
  styleUrl: './agricultural-economics.component.scss'
})
export class AgriculturalEconomicsComponent {
  responsiveOptions: any[] = [];
  dialogVisible: boolean = false;
  agriculturalEconomicsImages: { url: string; name: string; }[]=[] ;

  constructor(private departmentService: DepartmentService) {
    this.departmentService.readFilesFromStorage('AGRICULTURAL ECONOMICS');


    this.departmentService.agriculturalEconomics$.subscribe((images: { url: string; name: string; }[]) => {
      this.agriculturalEconomicsImages = images
      console.log(images)
      
    });
  }


  showDialog() {
    this.dialogVisible = true;
  }
}

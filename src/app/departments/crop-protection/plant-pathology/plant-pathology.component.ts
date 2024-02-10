import { Component } from '@angular/core';
import { DepartmentService } from '../../service/department.service';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-plant-pathology',
  standalone: true,
  imports: [ImageModule, GalleriaModule,DialogModule],
  templateUrl: './plant-pathology.component.html',
  styleUrl: './plant-pathology.component.scss'
})
export class PlantPathologyComponent {
  responsiveOptions: any[] = [];
  plantPathologyImages: { url: string; name: string; }[]=[];
  dialogVisible: boolean = false;
  mushroomProductionUnitImages: { url: string; name: string; }[]=[];
  bioControlProductionUnitImages: { url: string; name: string; }[]=[];

  constructor(private departmentService: DepartmentService) {
    this.departmentService.readFilesFromStorage('plantPathology');
    this.departmentService.readFilesFromStorage('mushroomUnit');
    this.departmentService.readFilesFromStorage('bioControlProductionUnit');



       // Subscribe to changes in the arrays
       this.departmentService.plantPathology$.subscribe((images: { url: string; name: string; }[]) => {
        this.plantPathologyImages = images;
      });
      this.departmentService.mushroomProductionUnit$.subscribe((images: { url: string; name: string; }[]) => {
        this.mushroomProductionUnitImages = images;
      });
      this.departmentService.bioControlProductionUnit$.subscribe((images: { url: string; name: string; }[]) => {
        this.bioControlProductionUnitImages = images;
      });
    }

    showDialog() {
      this.dialogVisible = true;
    }
}

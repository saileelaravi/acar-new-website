import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-tamil',
  standalone: true,
  imports: [ImageModule, GalleriaModule],
  templateUrl: './tamil.component.html',
  styleUrl: './tamil.component.scss'
})
export class TamilComponent {
  responsiveOptions: any[] = [];
  tamilImages: { url: string; name: string; }[]=[] ;

  constructor(private departmentService: DepartmentService) {
    this.departmentService.readFilesFromStorage('Tamil');


    this.departmentService.tamil$.subscribe((images: { url: string; name: string; }[]) => {
      this.tamilImages = images
      
    });
  }

}

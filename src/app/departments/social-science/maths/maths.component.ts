import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-maths',
  standalone: true,
  imports: [ImageModule, GalleriaModule],
  templateUrl: './maths.component.html',
  styleUrl: './maths.component.scss'
})
export class MathsComponent {
  responsiveOptions: any[] = [];
  mathsImages: { url: string; name: string; }[]=[] ;

  constructor(private departmentService: DepartmentService) {
    this.departmentService.readFilesFromStorage('Maths');


    this.departmentService.maths$.subscribe((images: { url: string; name: string; }[]) => {
      this.mathsImages = images
      console.log(images)
      
    });
  }
  
}

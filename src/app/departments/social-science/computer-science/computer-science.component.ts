import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-computer-science',
  standalone: true,
  imports: [ImageModule, GalleriaModule],
  templateUrl: './computer-science.component.html',
  styleUrl: './computer-science.component.scss'
})
export class ComputerScienceComponent {
  responsiveOptions: any[] = [];
  computerScienceImages: { url: string; name: string; }[]=[] ;

  constructor(private departmentService: DepartmentService) {
    this.departmentService.readFilesFromStorage('Computer Science');


    this.departmentService.computerScience$.subscribe((images: { url: string; name: string; }[]) => {
      this.computerScienceImages = images
      
    });
  }

}

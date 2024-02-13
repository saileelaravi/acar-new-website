import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { DepartmentService } from '../../service/department.service';

@Component({
  selector: 'app-english',
  standalone: true,
  imports: [ImageModule, GalleriaModule],
  templateUrl: './english.component.html',
  styleUrl: './english.component.scss'
})
export class EnglishComponent {
  responsiveOptions: any[] = [];
  englishImages: { url: string; name: string; }[]=[] ;

  constructor(private departmentService: DepartmentService) {
    this.departmentService.readFilesFromStorage('English');


    this.departmentService.english$.subscribe((images: { url: string; name: string; }[]) => {
      this.englishImages = images
      
    });
  }
}

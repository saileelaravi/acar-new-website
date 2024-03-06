import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { MenuService } from '../service/menu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-non-teaching-staff',
  standalone: true,
  imports: [CommonModule, ImageModule],
  templateUrl: './non-teaching-staff.component.html',
  styleUrl: './non-teaching-staff.component.scss'
})
export class NonTeachingStaffComponent {
  FacultyImages: { url: string; name: string; }[] = [];

  constructor(private menuService: MenuService) {
    this.menuService.readFilesFromStorage('non-teaching_faculty');


    this.menuService.nonTeachingFacultyImages$.subscribe((images: { url: string; name: string; }[]) => {
      this.FacultyImages = images
      console.log(images);

    });

  }

  viewProfile(e: any) {

  }
}

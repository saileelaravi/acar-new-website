import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AcademicsService } from '../../service/academics.service';
import { CommonModule } from '@angular/common';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, ImageModule, GalleriaModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {
  staffPublication: { url: string; name: string; }[] = [];


  displayCustom: boolean = false;

  activeIndex: number = 0;
  responsiveOptions: any[] = []

  constructor(private academicService: AcademicsService,) {

    this.academicService.readFilesFromStorage('staff-publications');

    this.academicService.staffPublication$.subscribe((images: { url: string; name: string; }[]) => {
      this.staffPublication = images
    })
  }

  imageClick(index: number) {
    this.activeIndex = index;
      this.displayCustom = true;
    console.log(index);

  }
}

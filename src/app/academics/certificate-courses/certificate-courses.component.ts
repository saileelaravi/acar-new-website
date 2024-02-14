import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { AcademicsService } from '../service/academics.service';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-certificate-courses',
  standalone: true,
  imports: [GalleriaModule, ImageModule],
  templateUrl: './certificate-courses.component.html',
  styleUrl: './certificate-courses.component.scss'
})
export class CertificateCoursesComponent {
  responsiveOptions: any[] = [];
  certificateCourseOrinterProgramImages: { url: string; name: string; }[] = [];

  constructor(private academicsService: AcademicsService) {
    this.academicsService.readFilesFromStorage('certificate-course-oriented-program');


    this.academicsService.certificateCourseOrintedProgram$.subscribe((images: { url: string; name: string; }[]) => {
      this.certificateCourseOrinterProgramImages = images
    });
  }

}

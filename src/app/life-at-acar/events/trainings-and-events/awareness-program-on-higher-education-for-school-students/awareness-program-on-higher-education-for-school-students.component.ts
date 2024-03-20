import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-awareness-program-on-higher-education-for-school-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './awareness-program-on-higher-education-for-school-students.component.html',
  styleUrl: './awareness-program-on-higher-education-for-school-students.component.scss'
})
export class AwarenessProgramOnHigherEducationForSchoolStudentsComponent {
  awarenessProgrammeOnHigherEducationforSchoolStudentsImages: { url: string; name: string; }[]=[];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('Awareness Programme on Higher Education for School Students');

  }

  ngOnInit() {
    this.lifeAtAcarService.awarenessProgrammeOnHigherEducationforSchoolStudents$.subscribe((images: { url: string; name: string; }[]) => {
      this.awarenessProgrammeOnHigherEducationforSchoolStudentsImages = images;
    });
  }
}

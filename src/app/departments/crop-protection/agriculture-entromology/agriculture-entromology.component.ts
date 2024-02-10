import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { DepartmentService } from '../../service/department.service';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-agriculture-entromology',
  standalone: true,
  imports: [CommonModule, ImageModule, GalleriaModule,DialogModule],
  templateUrl: './agriculture-entromology.component.html',
  styleUrl: './agriculture-entromology.component.scss'
})
export class AgricultureEntromologyComponent {
  beekeepingImages: { url: string, name: string }[] = [];
  imageUrls: { url: string, name: string }[] = [];
  bioControlImages: { url: string; name: string; }[]=[];
  sericultureImages: { url: string; name: string; }[] = [];
  exploreVisitImages: { url: string; name: string; }[]=[];
  studentsProjectWork: { url: string; name: string; }[] =[];
  nematologyImages: { url: string; name: string; }[]=[];

  dialogVisible: boolean = false;
  // responsiveOptions = []

  responsiveOptions: any[] = [];

  constructor(private departmentService: DepartmentService) {
    this.departmentService.readFilesFromStorage('Entomology-Student-Activities');
    this.departmentService.readFilesFromStorage('bee-keeping');
    this.departmentService.readFilesFromStorage('bio-control');
    this.departmentService.readFilesFromStorage('sericulture');
    this.departmentService.readFilesFromStorage('Exposure-Visit');
    this.departmentService.readFilesFromStorage('students-project-work');
    this.departmentService.readFilesFromStorage('Nematology');

    // Subscribe to changes in the arrays
    this.departmentService.beekeepingImages$.subscribe((images: { url: string; name: string; }[]) => {
      this.beekeepingImages = images;
    });

    this.departmentService.imageUrls$.subscribe((images: { url: string; name: string; }[]) => {
      this.imageUrls = images;
    });

    this.departmentService.bioControl$.subscribe((images: { url: string; name: string; }[]) => {
      this.bioControlImages = images;
    });
    this.departmentService.seriCulture$.subscribe((images: { url: string; name: string; }[]) => {
      this.sericultureImages = images;
    });

    this.departmentService.exploreVisit$.subscribe((images: { url: string; name: string; }[]) => {
      this.exploreVisitImages = images;
    });

    this.departmentService.studentProjectWork$.subscribe((images: { url: string; name: string; }[]) => {
      this.studentsProjectWork = images;
    });
    this.departmentService.nematology$.subscribe((images: { url: string; name: string; }[]) => {
      this.nematologyImages = images;
    });

  }

  showDialog() {
    this.dialogVisible = true;
  }

}


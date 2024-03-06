import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { DepartmentService } from '../service/department.service';

@Component({
  selector: 'app-agronomy',
  standalone: true,
  imports: [CarouselModule, NgbAccordionModule, DialogModule, ImageModule],
  templateUrl: './agronomy.component.html',
  styleUrl: './agronomy.component.scss',
  host: { ngSkipHydration: 'true' },

})
export class AgronomyComponent {
  responsiveOptions: any[] = [];
  dialogVisible: boolean = false;
  items = ['Vision', 'Mission', 'Principles', 'Facilities and infrastructure'];
  agronomyImages: { url: string; name: string; }[] = [];
  agronomyStatsImages: { url: string; name: string; }[] = [];

  constructor(private departmentService: DepartmentService) {
    this.departmentService.readFilesFromStorage('agronomy_dept_img');
    this.departmentService.readFilesFromStorage('agronomy_stats');
  }

  ngOnInit() {

    this.departmentService.agronomy$.subscribe((images: { url: string; name: string; }[]) => {
      this.agronomyImages = images
    });

    this.departmentService.agronomy_stats$.subscribe((images: { url: string; name: string; }[]) => {
      this.agronomyStatsImages = images
    });
  }

  showDialog() {
    this.dialogVisible = true;
  }

}

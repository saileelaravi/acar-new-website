import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { DepartmentService } from '../../service/department.service';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-extension',
  standalone: true,
  imports: [ImageModule, GalleriaModule,DialogModule],
  templateUrl: './extension.component.html',
  styleUrl: './extension.component.scss'
})
export class ExtensionComponent {
  responsiveOptions: any[] = [];
  galleriaImages: boolean = true; 
  extensionImages: { url: string; name: string; }[] = [];
  extensiongallery: { url: string; name: string; }[] = [];
  dialogVisible: boolean = false;


  constructor(private departmentService: DepartmentService) {
    this.departmentService.readFilesFromStorage('Extension');


    this.departmentService.extension$.subscribe((images: { url: string; name: string; }[]) => {
      if (this.galleriaImages){
        if (images.length == 3) {
          this.extensionImages = images;
          console.log('this.extensionImages::', this.extensionImages)
        }
      }
      this.extensiongallery = images;
    });
  }
  showDialog() {
    this.dialogVisible = true;
  }
}

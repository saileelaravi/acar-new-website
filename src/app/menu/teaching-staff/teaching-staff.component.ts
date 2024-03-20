import { Component, OnDestroy } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';
import { MenuService } from '../service/menu.service';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

interface Department {
  name: string;
  code: string;
}

@Component({
  selector: 'app-teaching-staff',
  standalone: true,
  imports: [CommonModule, ImageModule, AvatarModule, DropdownModule, FormsModule],
  templateUrl: './teaching-staff.component.html',
  styleUrl: './teaching-staff.component.scss'
})
export class TeachingStaffComponent {
  department: Department[];
  selectedDepartment!: Department;

  FacultyImages: any = [];

  facultyProfile: { url: string; name: string; }[] = [];
  placeholder!: string;
  principalImages: { url: string; name: string; }[]=[];


  constructor(private menuService: MenuService) {
    this.department = [
      { name: 'Crop Improvment', code: 'crop_improvment' },
      { name: 'Crop Management', code: 'crop_management' },
      { name: 'Department of Plant Protection', code: 'department_of_plant_protection' },
      { name: 'Natural Resource Management', code: 'natural_resource_management' },
      { name: 'Horticulture', code: 'horticulture' },
      { name: 'Social Science', code: 'social_sciences' },

    ];
    if (this.department.length > 0) {
      this.placeholder = this.department[0].name;
    }

    this.menuService.readFilesFromStorage('teaching_faculty/crop_improvment');
    this.menuService.readFilesFromStorage('teaching_faculty/crop_management');
    this.menuService.readFilesFromStorage('teaching_faculty/department_of_plant_protection');
    this.menuService.readFilesFromStorage('teaching_faculty/natural_resource_management');
    this.menuService.readFilesFromStorage('teaching_faculty/horticulture');
    this.menuService.readFilesFromStorage('teaching_faculty/social_sciences');
    this.menuService.readFilesFromStorage('teaching_faculty/principal');



    this.menuService.readFilesFromStorage('teaching_faculty/faculty_profile');

    this.menuService.cropImprovment$.subscribe((images: { url: string; name: string; }[]) => {
      this.FacultyImages = images
    });

    this.menuService.pricipal$.subscribe((images: { url: string; name: string; }[]) => {
      this.principalImages = images
      console.log('principal images', images)

    });

  }

  viewProfile(id: any) {
    console.log('id::', id);
    this.menuService.facultyProfile$.subscribe((images: { url: string; name: string; id: string }[]) => {
      this.facultyProfile = images
      // console.log(images);


      // Find the image with matching id
      const matchedImageID = images.find(image => image.id === id);

      if (matchedImageID) {
        window.open(matchedImageID.url)
        // Show the matched image
        console.log('Matched image:', matchedImageID);
        // Do whatever you want to do with the matched image
      } else {
        alert('Profile Not Found')
        console.log('No image found with the provided id.');
        // Handle case when no image is found with the provided id
      }
    });
  }

  openSelectedDepartmentImages(event: any) {


    if (event.code == 'crop_improvment') {
      this.menuService.cropImprovment$.subscribe((images: { url: string; name: string; }[]) => {
        this.FacultyImages = images
        console.log(this.FacultyImages);

      });
    }
    else if (event.code == 'crop_management') {
      this.menuService.cropManagement$.subscribe((images: { url: string; name: string; }[]) => {

        this.FacultyImages = images
        console.log(this.FacultyImages);
      });

    }
    else if (event.code == 'department_of_plant_protection') {
      this.menuService.department_of_plant_protection$.subscribe((images: { url: string; name: string; }[]) => {
        this.FacultyImages = images
        console.log(this.FacultyImages);
      });
    }

    else if (event.code == 'natural_resource_management') {
      this.menuService.natural_resource_management$.subscribe((images: { url: string; name: string; }[]) => {
        this.FacultyImages = images
        console.log(this.FacultyImages);
      });
    }
    else if (event.code == 'horticulture') {
      this.menuService.horticulture$.subscribe((images: { url: string; name: string; }[]) => {
        this.FacultyImages = images
        console.log(this.FacultyImages);
      });
    }
    else if (event.code == 'social_sciences') {
      this.menuService.social_sciences$.subscribe((images: { url: string; name: string; }[]) => {
        this.FacultyImages = images
        console.log(this.FacultyImages);
      });
    }
  }

  ngOnDestroy() {
    this.menuService.clearImages();
  }




}

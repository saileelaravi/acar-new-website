import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { DepartmentService } from '../service/department.service';

@Component({
  selector: 'app-food-science-nutrition',
  standalone: true,
  imports: [ImageModule, GalleriaModule],
  templateUrl: './food-science-nutrition.component.html',
  styleUrl: './food-science-nutrition.component.scss'
})
export class FoodScienceNutritionComponent {
  responsiveOptions: any[] = [];
  nourishingPregnantWomenImages=[
    {url:'assets/Chart-1-Lactogogues-scaled.jpg'      , name:'Lactogogues'},
    {url:'assets/Chart-2-Breastfeeding-scaled.jpg'    , name:'Breastfeeding'},
    {url:'assets/Chart-3-My-healthy-plate-scaled.jpg' , name:'My healthy plate'},
    {url:'assets/Chart-demonstration-scaled.jpg'      , name:'Demonstration'}
  ]
  nourishingPregnantWomenForFlourishingIndiaImages: { url: string; name: string; }[]=[];
  farmersTrainingProgrammeImages: { url: string; name: string; }[] = [];
  posterDesignImages: { url: string; name: string; }[]    = [];
  quizCompetationImages: { url: string; name: string; }[] = [];
  cookingContextImages: { url: string; name: string; }[]  = [];
  worldDayImages: { url: string; name: string; }[]        = [];


  constructor(private departmentService: DepartmentService) {
    this.departmentService.readFilesFromStorage('nourishing-pregnant-women-for-flourishing-India');
    this.departmentService.readFilesFromStorage('farmers-training-Programme');
    this.departmentService.readFilesFromStorage('World-Food-Day');
    this.departmentService.readFilesFromStorage('Cooking-contest');
    this.departmentService.readFilesFromStorage('quiz-competition');
    this.departmentService.readFilesFromStorage('poster-designing');




  this.departmentService.nourishingPregnantWomenForFlourishingIndia$.subscribe((images: { url: string; name: string; }[]) => {
    this.nourishingPregnantWomenForFlourishingIndiaImages = images;
  });
  this.departmentService.farmersTrainingProgramme$.subscribe((images: { url: string; name: string; }[]) => {
    this.farmersTrainingProgrammeImages = images;
  });
  this.departmentService.worldFoodDay$.subscribe((images: { url: string; name: string; }[]) => {
    this.worldDayImages = images;
  });
  this.departmentService.cookingContest$.subscribe((images: { url: string; name: string; }[]) => {
    this.cookingContextImages = images;
  });
  this.departmentService.quizCompetition$.subscribe((images: { url: string; name: string; }[]) => {
    this.quizCompetationImages = images;
  });
  this.departmentService.posterDesign$.subscribe((images: { url: string; name: string; }[]) => {
    this.posterDesignImages = images;
  });

}

}

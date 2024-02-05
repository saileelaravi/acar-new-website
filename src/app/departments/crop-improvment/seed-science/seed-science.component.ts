import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-seed-science',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './seed-science.component.html',
  styleUrl: './seed-science.component.scss'
})
export class SeedScienceComponent {

  seedtech_lab = [
    { url: 'assets/Seed-tech-Lab-1.jpg', title: 'Seed tech Lab-1' },
    { url: 'assets/Seed-tech-Lab-2.jpg', title: 'Seed tech Lab-2' },
    { url: 'assets/Seed-tech-Lab-3.jpg', title: 'Seed tech Lab-3' },
    { url: 'assets/Seed-tech-Lab-4.jpg', title: 'Seed tech Lab-4' },
    { url: 'assets/Seed-tech-Lab-5.jpg', title: 'Seed tech Lab-5' },
    { url: 'assets/Seed-tech-Lab-6.jpg', title: 'Seed tech Lab-6' },
    { url: 'assets/Seed-tech-Lab-7.jpg', title: 'Seed tech Lab-7' },
    { url: 'assets/Seed-tech-Lab-8.jpg', title: 'Seed tech Lab-8' },
    { url: 'assets/Seed-tech-Lab-9.jpg', title: 'Seed tech Lab-9' },
    { url: 'assets/Seed-tech-Lab-10.jpg', title:'Seed tech Lab-10'},

   
  ]

  responsiveOptions!: any[];
}

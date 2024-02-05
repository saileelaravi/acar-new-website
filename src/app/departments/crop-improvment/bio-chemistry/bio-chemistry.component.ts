import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-bio-chemistry',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './bio-chemistry.component.html',
  styleUrl: './bio-chemistry.component.scss'
})
export class BioChemistryComponent {
  products = [
    { url: 'assets/coloumn-chromotography.jpg', title: 'Coloumn chromotography' },
    { url: 'assets/eating-lemongrass-tea-with-students.jpg', title: 'Drinking lemongrass tea with students' },
    { url: 'assets/harvesting-lemongrass.jpg', title: 'Harvesting lemongrass' },
    { url: 'assets/lemongrass-dried-and-powdered.jpg', title: 'Lemongrass dried and powdered' },
    { url: 'assets/soap-products.jpg', title: 'Soap products' },
    { url: 'assets/visiting-lemongrass-field.jpg', title: 'Visiting lemongrass field' },

  ]
  responsiveOptions!: any[];
}

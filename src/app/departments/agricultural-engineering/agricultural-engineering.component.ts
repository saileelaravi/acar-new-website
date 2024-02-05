import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-agricultural-engineering',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './agricultural-engineering.component.html',
  styleUrl: './agricultural-engineering.component.scss'
})
export class AgriculturalEngineeringComponent {
  products = [
    { url: 'assets/Adjustment-of-Compass-Surveying-2.jpg', title: 'Adjustment of Compass Surveying' },
    { url: 'assets/Borewell-Recharging-System.jpg', title: 'Borewell Recharging System' },
    { url: 'assets/Check-dam.jpg', title: 'Check dam' },
    { url: 'assets/Compass-Surveying.jpg', title: 'Compass Surveying' },
    { url: 'assets/Offset.jpg', title: 'Offset' },
    { url: 'assets/Percolation-Pond.jpg', title: 'Percolation Pond' },
    { url: 'assets/Ranging.jpg', title: 'Ranging' },
    { url: 'assets/Soil-and-Water-Conservation-Measures-in-Hilly-Areas.jpg', title: 'Soil and Water Conservation Measures in Hilly Areas' },

  ];
  responsiveOptions!: any[];
}

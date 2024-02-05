import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-agronomy',
  standalone: true,
  imports: [CarouselModule,NgbAccordionModule,DialogModule ,ImageModule ],
  templateUrl: './agronomy.component.html',
  styleUrl: './agronomy.component.scss',
  host: {ngSkipHydration: 'true'},
   
})
export class AgronomyComponent {
  products = [
    { url: 'assets/AGRONOMY-LAB.jpg', title: 'AGRONOMY LAB' },
    { url: 'assets/AGRONOMY-LABORATORY.jpg', title: 'AGRONOMY LABORATORY' },
    { url: 'assets/CROP-CAFETERIA.jpg', title: 'CROP CAFETERIA' },
    { url: 'assets/FIELD-CLASS.jpg', title: 'FIELD CLASS' },
    { url: 'assets/HARVESTING-OF-PAIYUR-1-RICE-VARIETY.jpg', title: 'HARVESTING OF PAIYUR 1 RICE-VARIETY' },
    { url: 'assets/IDENTIFICATION-OF-TOOLS-AND-IMPLEMENTS.jpg', title: 'IDENTIFICATION OF TOOLS AND IMPLEMENTS' },
    { url: 'assets/HARVESTING-OF-WHEAT.jpg', title: 'HARVESTING OF WHEAT' },
    { url: 'assets/OPERATING-POWER-TILLER.jpg', title: 'OPERATING POWER TILLER' },
    { url: 'assets/PUDDLING-AND-LEVELLING-OF-FIELD.jpg', title: 'PUDDLING AND LEVELLING OF FIELD' },
    { url: 'assets/PLOUGHING.jpg', title: 'PLOUGHING' },
    { url: 'assets/TRAINING-AND-FIELD-DEMONSTRATION-TO-FARMERS.jpg', title: 'TRAINING AND FIELD DEMONSTRATION TO FARMERS' },
    { url: 'assets/SOWING.jpg', title: 'SOWING' },
  
  ];

  responsiveOptions!: any[];
  items = ['Vision', 'Mission', 'Principles','Facilities and infrastructure'];
  dialogVisible: boolean = false;

  weatherData = [
    { url: 'assets/Bright-Sunshine-hours.jpg', title: 'Bright Sunshine hours' },
    { url: 'assets/Maximum-Temp.jpg', title: 'Maximum Temp' },
    { url: 'assets/Minimum-Temp.jpg', title: 'Minimum Temp' },
    { url: 'assets/Pan-Evaporation-1.jpg', title: 'Pan Evaporation' },
    { url: 'assets/Rainfall-1.jpg', title: 'Rainfall' },
    { url: 'assets/Relative-Humidity-1.jpg', title: 'Relative Humidity' },
    { url: 'assets/wind-speed-1.jpg', title: 'wind speed' },
    
  ]


  ngOnInit() {

    this.responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];
}

showDialog() {
  this.dialogVisible = true;
}

}

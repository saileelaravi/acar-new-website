import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-animal-husbandry',
  standalone: true,
  imports: [NgbAccordionModule,CarouselModule],
  templateUrl: './animal-husbandry.component.html',
  styleUrl: './animal-husbandry.component.scss',
  host: {ngSkipHydration: 'true'},
})
export class AnimalHusbandryComponent {
  Poultry = [
    { url: 'assets/ah23.jpg' },
    { url: 'assets/ah24.jpg' },
    { url: 'assets/ah25.jpg' },
    { url: 'assets/ah27.jpg' },
    ];
    animal_husbandry = [
      { url: 'assets/ah22.jpg' },
      { url: 'assets/ah21.jpg' },
      { url: 'assets/ah18.jpg' },
      { url: 'assets/ah17.jpg' },
      { url: 'assets/ah16.jpg' },
      { url: 'assets/ah13.jpg' },
      { url: 'assets/ah11.jpg' },
      { url: 'assets/ah9.jpg' },
      { url: 'assets/ah8.jpg' },
    ]
  responsiveOptions!: any[];
}

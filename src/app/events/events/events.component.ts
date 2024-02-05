import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  products = [
    { url: 'assets/farm.jpg', title: 'Title 1' },
    { url: 'assets/Animal_husbandry.jpg', title: 'Title 2' },
    { url: 'assets/farm.jpg', title: 'Title 4' },
    { url: 'assets/Animal_husbandry.jpg', title: 'Title 5' },
    { url: 'assets/farm.jpg', title: 'Title 7' },
    { url: 'assets/Animal_husbandry.jpg', title: 'Title 8' },
  ];

  responsiveOptions!: any[];

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


}

import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-activites',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './activites.component.html',
  styleUrl: './activites.component.scss'
})
export class ActivitesComponent {

  // products: Product[] | undefined;

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
    // this.productService.getProductsSmall().then((products) => {
    //     this.products = products;
    // });

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

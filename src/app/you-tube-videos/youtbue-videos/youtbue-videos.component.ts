import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-youtbue-videos',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './youtbue-videos.component.html',
  styleUrl: './youtbue-videos.component.scss'
})
export class YoutbueVideosComponent {
  products: { url: SafeResourceUrl, title: string }[];

  constructor(private sanitizer: DomSanitizer) {
    this.products = [
      { url: this.getSafeVideoUrl('https://www.youtube.com/embed/f4_N1Sx_L1c'), title: 'Glimpse of ACAR' },
      { url: this.getSafeVideoUrl('https://www.youtube.com/embed/-15OkD6upUc'), title: 'Coffee Beans Documentary' },
    ];
  }

  private getSafeVideoUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

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

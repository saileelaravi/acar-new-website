import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenubarModule } from 'primeng/menubar';
import { ActivitesComponent } from '../activites/activites.component';
import { YoutbueVideosComponent } from '../you-tube-videos/youtbue-videos/youtbue-videos.component';
import { CampusComponent } from '../campus/campus/campus.component';
import { EventsComponent } from '../events/events/events.component';
import { Welcome2acarComponent } from '../welcome/welcome2acar/welcome2acar.component';
import { AcarNewsComponent } from '../welcome/acar-news/acar-news.component';
import { HeaderComponent } from '../menu/header/header.component';
import { CarouselModule } from 'primeng/carousel';
import { NgOptimizedImage } from '@angular/common';
import { PlacementsComponent } from '../activites/placements/placements.component';
import { GalleriaModule } from 'primeng/galleria';
import { WhyAcarComponent } from '../campus/why-acar/why-acar.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [NgbCarouselModule, 
        FormsModule, 
        MegaMenuModule, 
        ActivitesComponent, 
        YoutbueVideosComponent,
        CampusComponent,
        EventsComponent,
        Welcome2acarComponent,
        AcarNewsComponent,
        HeaderComponent,
        CarouselModule,
        NgOptimizedImage,
        PlacementsComponent,
        GalleriaModule,
        WhyAcarComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',

})

export class HomeComponent  {

    images: string[] = [
        'assets/2college_full_view.JPG',
        'assets/DSC_5112.JPG',
    //    'assets/IMG_0396.JPG',
    //    'assets/IMG_0408.JPG',
    //    'assets/IMG_1240.JPG',
    //    'assets/IMG_1941.JPG',
    //    'assets/IMG_6548.JPG',
    //    'assets/IMG_9918.JPG',

    ];
    responsiveOptions = []
}

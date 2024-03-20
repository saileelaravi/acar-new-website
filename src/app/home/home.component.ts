import { Component, OnInit } from '@angular/core';
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
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';

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
        WhyAcarComponent,
        ImageModule,
        DialogModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',

})

export class HomeComponent implements OnInit {
    images: string[] = [
        'assets/2college_full_view.JPG',
        'assets/DSC_5112.JPG',
    ];
    responsiveOptions = []
    displayDialog: boolean = false;


    ngOnInit() {
        // Show dialog when the component is initialized
        this.showDialog();
    }

    showDialog() {
        this.displayDialog = true;
    }


}

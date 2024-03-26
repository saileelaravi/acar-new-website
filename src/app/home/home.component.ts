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
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject } from 'rxjs';

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

    private _imageUrls$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
    imageUrls$ = this._imageUrls$.asObservable();
    dialogBoxImages: any = []
    showCurrentEventImage!: string;


    constructor(private storage: AngularFireStorage) { }


    ngOnInit() {
        // Show dialog when the component is initialized
        this.dialogOnPageOpen()
    }

    showDialog() {
        this.displayDialog = true;
    }

    readFilesFromStorage(folderPath: string) {
        const ref = this.storage.ref(folderPath);
        ref.listAll().subscribe(list => {
            list.items.forEach(itemRef => {
                this.readFile(itemRef);
            });
        });
    }

    // private readFile(itemRef: any): void {
    //     itemRef.getDownloadURL().then((url: string) => {
    //         itemRef.getMetadata().then((metadata: any) => {
    //             // console.log('timeCreated::', metadata.timeCreated, 'name::', metadata.name);
    //             (this.dialogBoxImages as unknown as { url: string; createdTime: Date }[]).push({ url, createdTime: new Date(metadata.timeCreated) });
    //             // Sorting the array based on createdTime
    //             (this.dialogBoxImages as unknown as { url: string; createdTime: Date }[]).sort((a, b) => b.createdTime.getTime() - a.createdTime.getTime());
    //             this.showCurrentEventImage = this.dialogBoxImages[0]
    //         });
    //     })
    //     console.log(this.dialogBoxImages);

    // }

    private readFile(itemRef: any): void {
        itemRef.getDownloadURL().then((url: string) => {
            itemRef.getMetadata().then((metadata: any) => {
                // console.log('timeCreated::', metadata.timeCreated, 'name::', metadata.name);
                const createdTime = new Date(metadata.timeCreated);
                const newItem = { url, createdTime };

                // Push the new item to the array and sort the array based on createdTime
                const dialogBoxImagesArray = this.dialogBoxImages as unknown as { url: string; createdTime: Date }[];
                dialogBoxImagesArray.push(newItem);
                dialogBoxImagesArray.sort((a, b) => b.createdTime.getTime() - a.createdTime.getTime());
                this.dialogBoxImages = dialogBoxImagesArray

            });
        });

    }


    dialogOnPageOpen() {
        this.readFilesFromStorage('invitationOnDialogOnPageLoads');
        console.log(this.dialogBoxImages);
        this.displayDialog = true;

    }

}

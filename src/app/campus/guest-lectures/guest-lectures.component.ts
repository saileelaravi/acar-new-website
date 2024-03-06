import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-guest-lectures',
  standalone: true,
  imports: [CommonModule, GalleriaModule, CarouselModule, ImageModule],
  templateUrl: './guest-lectures.component.html',
  styleUrl: './guest-lectures.component.scss'
})
export class GuestLecturesComponent {
  // imageUrls: any = [];
  responsiveOptions: any[] = [];
  imageUrls: { url: string; name: string; }[] = [];
  displayCustom: boolean = false;
  activeIndex: number = 0;
  
  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
    this.readFilesFromStorage('/GIS Guest lecture');
  }

  readFilesFromStorage(folderPath: string) {
    const ref = this.storage.ref(folderPath);
    ref.listAll().subscribe(list => {
      list.items.forEach(itemRef => {
        this.readFile(itemRef);
      });
    });
  }

  readFile(itemRef: any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      itemRef.getDownloadURL().then((url: string) => {
        this.imageUrls.push({ url: url, name: itemRef.name.replace(/-/g, ' ') });
        resolve();
      }).catch((error: any) => {
        console.error('Error getting download URL:', error);
        reject(error);
      });
    });
  }
  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
}
}

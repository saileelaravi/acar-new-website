import { Component } from '@angular/core';
import { FirebaseService } from '../../../services/firebase/firebase.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-agriculture-entromology',
  standalone: true,
  imports: [CommonModule,ImageModule,GalleriaModule],
  templateUrl: './agriculture-entromology.component.html',
  styleUrl: './agriculture-entromology.component.scss'
})
export class AgricultureEntromologyComponent {

  constructor(private storage: AngularFireStorage) { 
    this.readFilesFromStorage('Entomology-Student-Activities');
    console.log('this.imageUrls::',this.imageUrls);
    
  }
  
  imageUrls: any = [ {
    "url": "https://firebasestorage.googleapis.com/v0/b/acar-5cd89.appspot.com/o/Entomology-Student-Activities%2FStudents-Herbarium-collection-at-ACAR-farm.jpg?alt=media&token=49b12b07-4c1a-4e88-b497-033ae5671a61",
    "name": "Students Herbarium collection at ACAR farm.jpg"
} ];
  responsiveOptions = []

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
        this.imageUrls.push({ url:url,name:itemRef.name.replace(/-/g, ' ') });
        resolve();
      }).catch((error: any) => {
        console.error('Error getting download URL:', error);
        reject(error);
      });
    });
  }

}

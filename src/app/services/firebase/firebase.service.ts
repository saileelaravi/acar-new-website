import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private storage: AngularFireStorage) { }
  
  imageUrls: any = [];

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
        this.imageUrls.push({ url:url,name:itemRef.name });
        resolve();
      }).catch((error: any) => {
        console.error('Error getting download URL:', error);
        reject(error);
      });
    });
  }
}

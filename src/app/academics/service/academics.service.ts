import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcademicsService {
  private _certificateCourseOrintedProgram$ = new BehaviorSubject<{ url: string; name: string }[]>([]);

  certificateCourseOrintedProgram$ = this._certificateCourseOrintedProgram$.asObservable();

  constructor(private storage: AngularFireStorage) {

  }

  readFilesFromStorage(folderPath: string) {
    const ref = this.storage.ref(folderPath);
    ref.listAll().subscribe(list => {
      list.items.forEach(itemRef => {
        this.readFile(itemRef);
      });
    });
  }

  private readFile(itemRef: any): void {
    itemRef.getDownloadURL().then((url: string) => {
      if (itemRef.fullPath.split('/')[0] === 'certificate-course-oriented-program') {
        this._certificateCourseOrintedProgram$.next([...this._certificateCourseOrintedProgram$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
    }).catch((error: any) => {
      console.error('Error getting download URL:', error);
    });
  }
  getPdfUrl(label: string) {
    let pdfFileName: string;
    pdfFileName = label + '.pdf'
    const storageRef = this.storage.ref(`/committee-documents/${pdfFileName}`);
    return storageRef.getDownloadURL();
  }
}

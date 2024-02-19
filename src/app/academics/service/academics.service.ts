import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcademicsService {
  private _certificateCourseOrintedProgram$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _nssDayTreePlanting$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _azadiKaAmritMahotsav$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _wasteDisposalCampaign$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _worldFoodDay$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _newsLettersAndBrouchers$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _staffPublication$ = new BehaviorSubject<{ url: string; name: string }[]>([]);



  certificateCourseOrintedProgram$ = this._certificateCourseOrintedProgram$.asObservable();
  nssDayTreePlanting$ = this._nssDayTreePlanting$.asObservable();
  azadiKaAmritMahotsav$ = this._azadiKaAmritMahotsav$.asObservable();
  wasteDisposalCampaign$ = this._wasteDisposalCampaign$.asObservable();
  worldFoodDay$ = this._worldFoodDay$.asObservable();
  newsLettersAndBrouchers$ = this._newsLettersAndBrouchers$.asObservable();
  staffPublication$ = this._staffPublication$.asObservable();

  constructor(private storage: AngularFireStorage) {

  }

  readFilesFromStorage(folderPath: string) {
    const ref = this.storage.ref(folderPath);
    ref.listAll().subscribe(list => {
      list.items.forEach(itemRef => {
        // console.log('itemRef.getMetadata()',itemRef.getMetadata())
        this.readFile(itemRef);
      });
    });
  }

  private readFile(itemRef: any): void {
    itemRef.getDownloadURL().then((url: string) => {
      if (itemRef.fullPath.split('/')[0] === 'certificate-course-oriented-program') {
        this._certificateCourseOrintedProgram$.next([...this._certificateCourseOrintedProgram$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'NSS-day-tree-planting') {
        this._nssDayTreePlanting$.next([...this._nssDayTreePlanting$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Azadi-Ka-Amrit-Mahotsav') {
        this._azadiKaAmritMahotsav$.next([...this._azadiKaAmritMahotsav$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'waste-disposal-campaign') {
        this._wasteDisposalCampaign$.next([...this._wasteDisposalCampaign$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'worldFoodDay') {
        this._worldFoodDay$.next([...this._worldFoodDay$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'newsLettersAndBrouchers') {
        this._newsLettersAndBrouchers$.next([...this._newsLettersAndBrouchers$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'staff-publications') {
        this._staffPublication$.next([...this._staffPublication$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
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
  getBroucherPdfUrl(label: string) {
    let pdfFileName: string;
    pdfFileName = label
    const storageRef = this.storage.ref(`/news-letters-brouchers-pdfs/${pdfFileName}`);
    return storageRef.getDownloadURL();
  }
}

import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitesService {
  private _jobPlacements$ = new BehaviorSubject<{ url: string; name: string; position: string; id: string; }[]>([]);
  private _tnau_higher_studies_2016_batch$ = new BehaviorSubject<{ url: string; name: string; }[]>([]);
  private _tnau_higher_studies_2017_batch$ = new BehaviorSubject<{ url: string; name: string; }[]>([]);
  private _other_higher_education_institutions$ = new BehaviorSubject<{ url: string; name: string; }[]>([]);


  jobPlacements$ = this._jobPlacements$.asObservable()
  tnau_higher_studies_2016_batch$ = this._tnau_higher_studies_2016_batch$.asObservable()
  tnau_higher_studies_2017_batch$ = this._tnau_higher_studies_2017_batch$.asObservable()
  other_higher_education_institutions$ = this._other_higher_education_institutions$.asObservable()


  constructor(private storage: AngularFireStorage) { }

  readFilesFromStorage(folderPath: string, position?: any, id?: any) {
    console.log(folderPath)
    const ref = this.storage.ref(folderPath);
    ref.listAll().subscribe(list => {
      list.items.forEach(itemRef => {
        this.readFile(itemRef, position, id);
      });
    });
  }
  // private readFile(itemRef: any,position: any,id:any): void {
  //   itemRef.getDownloadURL().then((url: string) => {
  //     if (itemRef.fullPath.split('/')[0] === 'job_placements') {
  //       this._jobPlacements$.next([...this._jobPlacements$.value, { url: url, name: itemRef.name.replace(/-/g, ' '), position:position ,id:id}]);
  //     }
  //   }).catch((error: any) => {
  //     console.error('Error getting download URL:', error);
  //   });
  // }


  // private readFile(itemRef: any, position: any, id: any): void {
  //   console.log("Processing file with id:", id);
  //   console.log("Current placements:", this._jobPlacements$.value);
  //   itemRef.getDownloadURL().then((url: string) => {
  //     if (itemRef.fullPath.split('/')[0] === 'job_placements') {
  //       const newPlacement = { url: url, name: itemRef.name.replace(/-/g, ' '), position: position, id: id };
  //       const updatedPlacements = this._jobPlacements$.value.map(place => place.id === id ? newPlacement : place);
  //       this._jobPlacements$.next(updatedPlacements);
  //     }
  //   }).catch((error: any) => {
  //     console.error('Error getting download URL:', error);
  //   });
  // }

  private readFile(itemRef: any, position: any, id: any): void {
    itemRef.getDownloadURL().then((url: string) => {
      if (itemRef.fullPath.split('/')[0] === 'job_placements') {
        const newPlacement = { url: url, name: itemRef.name.replace(/-/g, ' '), position: position, id: id };
        const updatedPlacements = [...this._jobPlacements$.value, newPlacement];
        this._jobPlacements$.next(updatedPlacements);
      } else if (itemRef.fullPath.split('/')[0] === 'tnau_higher_studies_2016_batch') {
        this._tnau_higher_studies_2016_batch$.next([...this._tnau_higher_studies_2016_batch$.value, { url: url, name: itemRef.name.replace(/.jpg$/i, '').replace(/-/g, ' ') }]);
      } else if (itemRef.fullPath.split('/')[0] === 'tnau_higher_studies_2017_batch') {
        this._tnau_higher_studies_2017_batch$.next([...this._tnau_higher_studies_2017_batch$.value, { url: url, name: itemRef.name.replace(/.jpg$/i, '').replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'other_higher_education_institutions') {
        this._other_higher_education_institutions$.next([...this._other_higher_education_institutions$.value, { url: url, name: itemRef.name.replace(/.jpg$/i, '').replace(/-/g, ' ') }]);
      }
    }).catch((error: any) => {
      console.error('Error getting download URL:', error);
    });
  }

}

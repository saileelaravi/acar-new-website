import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  // imageUrls = [{}]
  // beekeepingImages = [{}]

  private _beekeepingImages$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _imageUrls$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _bioControl$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _seriCulture$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _exploreVisit$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _studentProjectWork$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _nematology$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _plantPathology$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _mushroomProductionUnit$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _bioControlProductionUnit$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _soilScienceStudentsActivities$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _acarFertilityStatus$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _microbialIsolation$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _azolla$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _microbialcultures$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _bioProducts$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _environmentalScienceStudentsActivies$ = new BehaviorSubject<{ url: string; name: string }[]>([]);






  beekeepingImages$ = this._beekeepingImages$.asObservable();
  imageUrls$ = this._imageUrls$.asObservable();
  bioControl$ = this._bioControl$.asObservable();
  seriCulture$ = this._seriCulture$.asObservable();
  exploreVisit$ = this._exploreVisit$.asObservable();
  studentProjectWork$ = this._studentProjectWork$.asObservable();
  nematology$ = this._nematology$.asObservable();
  plantPathology$ = this._plantPathology$.asObservable();
  mushroomProductionUnit$ = this._mushroomProductionUnit$.asObservable();
  bioControlProductionUnit$ = this._bioControlProductionUnit$.asObservable();
  soilScienceStudentsActivities$ = this._soilScienceStudentsActivities$.asObservable();
  acarFertilityStatus$ = this._acarFertilityStatus$.asObservable();
  microbialIsolation$ = this._microbialIsolation$.asObservable();
  azolla$ = this._azolla$.asObservable();
  microbialcultures$ = this._microbialcultures$.asObservable()
  bioProducts$ = this._bioProducts$.asObservable()
  environmentalScienceStudentsActivies$ = this._environmentalScienceStudentsActivies$.asObservable()



  constructor(private storage: AngularFireStorage) { }

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
      if (itemRef.fullPath.split('/')[0] === 'Entomology-Student-Activities') {
        this._imageUrls$.next([...this._imageUrls$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      } else if (itemRef.fullPath.split('/')[0] === 'bee-keeping') {
        this._beekeepingImages$.next([...this._beekeepingImages$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'bio-control') {
        this._bioControl$.next([...this._bioControl$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'sericulture') {
        this._seriCulture$.next([...this._seriCulture$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Exposure-Visit') {
        this._exploreVisit$.next([...this._exploreVisit$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'students-project-work') {
        this._studentProjectWork$.next([...this._studentProjectWork$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Nematology') {
        this._nematology$.next([...this._nematology$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'plantPathology') {
        this._plantPathology$.next([...this._plantPathology$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'mushroomUnit') {
        this._mushroomProductionUnit$.next([...this._mushroomProductionUnit$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'bioControlProductionUnit') {
        this._bioControlProductionUnit$.next([...this._bioControlProductionUnit$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'soil-science-students-activites') {
        this._soilScienceStudentsActivities$.next([...this._soilScienceStudentsActivities$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'acar-fertility-status') {
        this._acarFertilityStatus$.next([...this._acarFertilityStatus$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Microbial-Isolation') {
        this._microbialIsolation$.next([...this._microbialIsolation$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Azolla') {
        this._azolla$.next([...this._azolla$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Microbial-cultures') {
        this._microbialcultures$.next([...this._microbialcultures$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'bio-products') {
        this._bioProducts$.next([...this._bioProducts$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'environmentalScienceStudentsActivies') {
        this._environmentalScienceStudentsActivies$.next([...this._environmentalScienceStudentsActivies$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
    }).catch((error: any) => {
      console.error('Error getting download URL:', error);
    });
  }

}  

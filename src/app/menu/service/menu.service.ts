import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private _cropImprovment$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]);
  private _cropManagement$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]);
  private _department_of_plant_protection$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]);
  private _natural_resource_management$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]);
  private _horticulture$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]);
  private _social_sciences$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]);
  private _nonTeachingFacultyImages$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]);
  private _pricipal$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]);


  private _facultyProfile$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]);
  // private _facultyProfile$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]);


  cropImprovment$ = this._cropImprovment$.asObservable()
  cropManagement$ = this._cropManagement$.asObservable()
  department_of_plant_protection$ = this._department_of_plant_protection$.asObservable()
  natural_resource_management$ = this._natural_resource_management$.asObservable()
  horticulture$ = this._horticulture$.asObservable()
  social_sciences$ = this._social_sciences$.asObservable()
  nonTeachingFacultyImages$ = this._nonTeachingFacultyImages$.asObservable()
  pricipal$ = this._pricipal$.asObservable()

  facultyProfile$ = this._facultyProfile$.asObservable()


  constructor(private storage: AngularFireStorage) { }

  readFilesFromStorage(folderPath: string) {
    console.log(folderPath)
    const ref = this.storage.ref(folderPath);
    ref.listAll().subscribe(list => {
      list.items.forEach(itemRef => {
        this.readFile(itemRef);
      });
    });
  }

  private readFile(itemRef: any): void {
    console.log(itemRef.fullPath)

    itemRef.getDownloadURL().then((url: string) => {
      const extractedString = itemRef.fullPath.match(/^[^/]+\/[^/]+/)[0];
      // console.log(extractedString);

      if (extractedString === 'teaching_faculty/crop_improvment') {
        const newPlacement = { url: url, name: itemRef.name.replace(/.jpg/i, '').replace(/\.(\w)/g, '. $1'), id: itemRef.name.split('_')[1].split('.')[0] };
        const updatedPlacements = [...this._cropImprovment$.value, newPlacement];
        // this._cropImprovment$.next(updatedPlacements);
        // Sorting the array by id in ascending order
        updatedPlacements.sort((a, b) => a.id - b.id);
        this._cropImprovment$.next(updatedPlacements);


        // this._cropImprovment$.next([...this._cropImprovment$.value, { url: url, name: itemRef.name.replace(/.jpg/i, '').replace(/\.(\w)/g, '. $1') }]);
      }
      else if (extractedString === 'teaching_faculty/faculty_profile') {
        const newPlacement = { url: url, name: itemRef.name.replace(/.jpg/i, '').replace(/\.(\w)/g, '. $1'), id: itemRef.name.split('_')[1].split('.')[0] };
        const updatedPlacements = [...this._facultyProfile$.value, newPlacement];
        updatedPlacements.sort((a, b) => a.id - b.id);
        this._facultyProfile$.next(updatedPlacements);
      }
      else if (extractedString === 'teaching_faculty/crop_management') {
        const newPlacement = { url: url, name: itemRef.name.replace(/.jpg/i, '').replace(/\.(\w)/g, '. $1'), id: itemRef.name.split('_')[1].split('.')[0] };
        const updatedPlacements = [...this._cropManagement$.value, newPlacement];
        updatedPlacements.sort((a, b) => a.id - b.id);
        this._cropManagement$.next(updatedPlacements);
      }
      else if (extractedString === 'teaching_faculty/department_of_plant_protection') {
        const newPlacement = { url: url, name: itemRef.name.replace(/.jpg/i, '').replace(/\.(\w)/g, '. $1'), id: itemRef.name.split('_')[1].split('.')[0] };
        const updatedPlacements = [...this._department_of_plant_protection$.value, newPlacement];
        updatedPlacements.sort((a, b) => a.id - b.id);
        this._department_of_plant_protection$.next(updatedPlacements);
      }
      else if (extractedString === 'teaching_faculty/natural_resource_management') {
        const newPlacement = { url: url, name: itemRef.name.replace(/.jpg/i, '').replace(/\.(\w)/g, '. $1'), id: itemRef.name.split('_')[1].split('.')[0] };
        const updatedPlacements = [...this._natural_resource_management$.value, newPlacement];
        updatedPlacements.sort((a, b) => a.id - b.id);
        this._natural_resource_management$.next(updatedPlacements);
      }
      else if (extractedString === 'teaching_faculty/horticulture') {
        const newPlacement = { url: url, name: itemRef.name.replace(/.jpg/i, '').replace(/\.(\w)/g, '. $1'), id: itemRef.name.split('_')[1].split('.')[0] };
        const updatedPlacements = [...this._horticulture$.value, newPlacement];
        updatedPlacements.sort((a, b) => a.id - b.id);
        this._horticulture$.next(updatedPlacements);
      }
      else if (extractedString === 'teaching_faculty/social_sciences') {
        const newPlacement = { url: url, name: itemRef.name.replace(/.jpg/i, '').replace(/\.(\w)/g, '. $1'), id: itemRef.name.split('_')[1].split('.')[0] };
        const updatedPlacements = [...this._social_sciences$.value, newPlacement];
        updatedPlacements.sort((a, b) => a.id - b.id);
        this._social_sciences$.next(updatedPlacements);
      }
      else if (extractedString === 'teaching_faculty/principal') {
        const newPlacement = { url: url, name: itemRef.name.replace(/.jpg/i, '').replace(/\.(\w)/g, '. $1'), id: itemRef.name.split('_')[1].split('.')[0] };
        const updatedPlacements = [...this._pricipal$.value, newPlacement];
        updatedPlacements.sort((a, b) => a.id - b.id);
        this._pricipal$.next(updatedPlacements);
      }
      else if (itemRef.fullPath.split('/')[0] === 'non-teaching_faculty') {
        const newPlacement = { url: url, name: itemRef.name.replace(/.jpg/i, '').replace(/\.(\w)/g, '. $1'), id: itemRef.name.split('_')[1].split('.')[0] };
        const updatedPlacements = [...this._nonTeachingFacultyImages$.value, newPlacement];
        updatedPlacements.sort((a, b) => a.id - b.id);
        this._nonTeachingFacultyImages$.next(updatedPlacements);
      }
    }).catch((error: any) => {
      console.error('Error getting download URL:', error);
    });
  }
  clearImages() {
    this._pricipal$.next([]);
    this._cropImprovment$.next([]);
    this._cropManagement$.next([]);
    this._department_of_plant_protection$.next([]);
    this._natural_resource_management$.next([]);
    this._horticulture$.next([]);
    this._social_sciences$.next([]);
    this._pricipal$.next([]);
    this._nonTeachingFacultyImages$.next([]);
  }
}

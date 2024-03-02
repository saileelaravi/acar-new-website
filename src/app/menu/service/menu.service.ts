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

  private _cropImprovmentFacultyProfile$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]); 
  // private _cropImprovmentFacultyProfile$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]);


  cropImprovment$ = this._cropImprovment$.asObservable()
  cropManagement$ = this._cropManagement$.asObservable()
  department_of_plant_protection$ = this._department_of_plant_protection$.asObservable()
  natural_resource_management$ = this._natural_resource_management$.asObservable()
  horticulture$ = this._horticulture$.asObservable()
  social_sciences$ = this._social_sciences$.asObservable()

  cropImprovmentFacultyProfile$ = this._cropImprovmentFacultyProfile$.asObservable()


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
    // console.log(itemRef.name.split('_'))
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
        const updatedPlacements = [...this._cropImprovmentFacultyProfile$.value, newPlacement];
        updatedPlacements.sort((a, b) => a.id - b.id);
        this._cropImprovmentFacultyProfile$.next(updatedPlacements);
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

    }).catch((error: any) => {
      console.error('Error getting download URL:', error);
    });
  }

}

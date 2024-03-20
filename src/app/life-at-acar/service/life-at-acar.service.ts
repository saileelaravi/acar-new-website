import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LifeAtAcarService {
  private _hostel$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _yoga$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _padhmaSreeAward$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _tanflorVisit$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _eductionalAwarness$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _votersDay$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _nssDay$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _dengueAwareness$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _graduation$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _aluminiMeet$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _breedingManagementInCattle$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _awarenessProgrammeOnHigherEducationforSchoolStudents$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _exposureVisitToNIFTEMTNAU$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _PRASettipalli$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _trainingonIntegratedCropManagement$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _ERISilkwormTraining2022$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _GISGuestlecture$ = new BehaviorSubject<{ url: string; name: string }[]>([]);


  private _teachersDaycelb$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _Administrative_Office_Opening_2023$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _muthamizh_Vizha_2023$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _freshersDay_2023$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _Womens_Day_Celebration_2023$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _Year_Day_Celebration_2021_Batch$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _TNAU_Standing_Committee_Visit_2022$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _Parents_Teachers_Meeting_2022$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _Independence_Day_2022$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _agriculture_Innovation_Competition$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _club_day_and_hostel_day_2022$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _farewell_2022$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _pongal$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _world_food_day_2022$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _saraswathi_puja_2022$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _friendlyMatchbwAcarandHorticulture$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _inter_college_tournament_2022_coimbatore$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _sports_day_2022$ = new BehaviorSubject<{ url: string; name: string }[]>([]);






  hostel$ = this._hostel$.asObservable()
  yoga$ = this._yoga$.asObservable()
  padhmaSreeAward$ = this._padhmaSreeAward$.asObservable()
  tanflorVisit$ = this._tanflorVisit$.asObservable()
  eductionalAwarness$ = this._eductionalAwarness$.asObservable()
  votersDay$ = this._votersDay$.asObservable()
  nssDay$ = this._nssDay$.asObservable()
  dengueAwareness$ = this._dengueAwareness$.asObservable()
  graduation$ = this._graduation$.asObservable()
  aluminiMeet$ = this._aluminiMeet$.asObservable()
  breedingManagementInCattle$ = this._breedingManagementInCattle$.asObservable()
  awarenessProgrammeOnHigherEducationforSchoolStudents$ = this._awarenessProgrammeOnHigherEducationforSchoolStudents$.asObservable()
  exposureVisitToNIFTEMTNAU$ = this._exposureVisitToNIFTEMTNAU$.asObservable()
  PRASettipalli$ = this._PRASettipalli$.asObservable()
  trainingonIntegratedCropManagement$ = this._trainingonIntegratedCropManagement$.asObservable()
  ERISilkwormTraining2022$ = this._ERISilkwormTraining2022$.asObservable()
  GISGuestlecture$ = this._GISGuestlecture$.asObservable()


  teachersDaycelb$ = this._teachersDaycelb$.asObservable()
  Administrative_Office_Opening_2023$ = this._Administrative_Office_Opening_2023$.asObservable()
  muthamizh_Vizha_2023$ = this._muthamizh_Vizha_2023$.asObservable()
  freshersDay_2023$ = this._freshersDay_2023$.asObservable()
  Womens_Day_Celebration_2023$ = this._Womens_Day_Celebration_2023$.asObservable()
  Year_Day_Celebration_2021_Batch$ = this._Year_Day_Celebration_2021_Batch$.asObservable()
  TNAU_Standing_Committee_Visit_2022$ = this._TNAU_Standing_Committee_Visit_2022$.asObservable()
  Parents_Teachers_Meeting_2022$ = this._Parents_Teachers_Meeting_2022$.asObservable()
  Independence_Day_2022$ = this._Independence_Day_2022$.asObservable()
  agriculture_Innovation_Competition$ = this._agriculture_Innovation_Competition$.asObservable()
  club_day_and_hostel_day_2022$ = this._club_day_and_hostel_day_2022$.asObservable()
  farewell_2022$ = this._farewell_2022$.asObservable()
  pongal$ = this._pongal$.asObservable()
  world_food_day_2022$ = this._world_food_day_2022$.asObservable()
  saraswathi_puja_2022$ = this._saraswathi_puja_2022$.asObservable()
  friendlyMatchbwAcarandHorticulture$ = this._friendlyMatchbwAcarandHorticulture$.asObservable()
  inter_college_tournament_2022_coimbatore$ = this._inter_college_tournament_2022_coimbatore$.asObservable()
  sports_day_2022$ = this._sports_day_2022$.asObservable()






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
      if (itemRef.fullPath.split('/')[0] === 'hostel') {
        this._hostel$.next([...this._hostel$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'yoga') {
        this._yoga$.next([...this._yoga$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'PADHMASREE- AWARD') {
        this._padhmaSreeAward$.next([...this._padhmaSreeAward$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'tanflor_visit') {
        this._tanflorVisit$.next([...this._tanflorVisit$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'eductional-awarness') {
        this._eductionalAwarness$.next([...this._eductionalAwarness$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      // else if (itemRef.fullPath.split('/')[0] === 'voters-day') {
      //   this._votersDay$.next([...this._votersDay$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      // }
      else if (itemRef.fullPath.split('/')[0] === 'voters-day') {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._votersDay$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._votersDay$.next(updatedArray);
      }

      // else if (itemRef.fullPath.split('/')[0] === 'nss-day') {
      //   this._nssDay$.next([...this._nssDay$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      // }
      else if (itemRef.fullPath.split('/')[0] === 'nss-day') {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._nssDay$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._nssDay$.next(updatedArray);
      }
      // else if (itemRef.fullPath.split('/')[0] === 'dengue-awareness-program') {
      //   this._dengueAwareness$.next([...this._dengueAwareness$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      // }
      else if (itemRef.fullPath.split('/')[0] === 'dengue-awareness-program') {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._dengueAwareness$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._dengueAwareness$.next(updatedArray);
      }
      // else if (itemRef.fullPath.split('/')[0] === 'graduation-celebration') {
      //   this._graduation$.next([...this._graduation$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      // }

      else if (itemRef.fullPath.split('/')[0] === 'graduation-celebration') {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._graduation$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._graduation$.next(updatedArray);
      }
      else if (itemRef.fullPath.split('/')[0] === 'acar-alumini-meet') {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._aluminiMeet$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._aluminiMeet$.next(updatedArray);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Breeding Management in Cattle') {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._breedingManagementInCattle$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._breedingManagementInCattle$.next(updatedArray);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Awareness Programme on Higher Education for School Students') {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._awarenessProgrammeOnHigherEducationforSchoolStudents$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._awarenessProgrammeOnHigherEducationforSchoolStudents$.next(updatedArray);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Exposure Visit to NIFTEM, TNAU') {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._exposureVisitToNIFTEMTNAU$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._exposureVisitToNIFTEMTNAU$.next(updatedArray);
      }
      else if (itemRef.fullPath.split('/')[0] === 'PRA Settipalli') {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._PRASettipalli$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._PRASettipalli$.next(updatedArray);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Training on Integrated Crop Management') {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._trainingonIntegratedCropManagement$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._trainingonIntegratedCropManagement$.next(updatedArray);
      }
      else if (itemRef.fullPath.split('/')[0] === 'ERI Silkworm Training 2022') {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._ERISilkwormTraining2022$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._ERISilkwormTraining2022$.next(updatedArray);
      }
      else if (itemRef.fullPath.split('/')[0] === 'GIS Guest lecture') {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._GISGuestlecture$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._GISGuestlecture$.next(updatedArray);
      }

      else if (itemRef.fullPath.split('/')[0] === 'Teachers Day Celebration 2023') {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._teachersDaycelb$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._teachersDaycelb$.next(updatedArray);

        // this._teachersDaycelb$.next([...this._teachersDaycelb$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'ACAR Administrative Office Opening 2023') {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._Administrative_Office_Opening_2023$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._Administrative_Office_Opening_2023$.next(updatedArray);
        // this._Administrative_Office_Opening_2023$.next([...this._Administrative_Office_Opening_2023$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Muthamizh Vizha 2023') {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._muthamizh_Vizha_2023$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._muthamizh_Vizha_2023$.next(updatedArray);

        // this._muthamizh_Vizha_2023$.next([...this._muthamizh_Vizha_2023$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Freshers Day 2023') {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._freshersDay_2023$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._freshersDay_2023$.next(updatedArray);

        // this._freshersDay_2023$.next([...this._freshersDay_2023$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "Women's Day Celebration 2023") {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._Womens_Day_Celebration_2023$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._Womens_Day_Celebration_2023$.next(updatedArray);

        // this._Womens_Day_Celebration_2023$.next([...this._Womens_Day_Celebration_2023$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "Year Day Celebration - 2021 Batch") {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._Year_Day_Celebration_2021_Batch$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._Year_Day_Celebration_2021_Batch$.next(updatedArray);
        // this._Year_Day_Celebration_2021_Batch$.next([...this._Year_Day_Celebration_2021_Batch$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "TNAU Standing Committee Visit 2022") {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._TNAU_Standing_Committee_Visit_2022$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._TNAU_Standing_Committee_Visit_2022$.next(updatedArray);

        // this._TNAU_Standing_Committee_Visit_2022$.next([...this._TNAU_Standing_Committee_Visit_2022$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "Parents Teachers Meeting 2022") {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._Parents_Teachers_Meeting_2022$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._Parents_Teachers_Meeting_2022$.next(updatedArray);
        // this._Parents_Teachers_Meeting_2022$.next([...this._Parents_Teachers_Meeting_2022$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "Independence Day 2022") {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._Independence_Day_2022$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._Independence_Day_2022$.next(updatedArray);

        // this._Independence_Day_2022$.next([...this._Independence_Day_2022$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "Agriculture Innovation Competition") {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._agriculture_Innovation_Competition$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._agriculture_Innovation_Competition$.next(updatedArray);

        // this._agriculture_Innovation_Competition$.next([...this._agriculture_Innovation_Competition$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "Club Day and Hostel Day 2022") {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._club_day_and_hostel_day_2022$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._club_day_and_hostel_day_2022$.next(updatedArray);

        // this._club_day_and_hostel_day_2022$.next([...this._club_day_and_hostel_day_2022$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "Farewell 2022") {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._farewell_2022$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._farewell_2022$.next(updatedArray);

        // this._farewell_2022$.next([...this._farewell_2022$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "Pongal") {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._pongal$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._pongal$.next(updatedArray);

        // this._pongal$.next([...this._pongal$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "World Food Day 2022") {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._world_food_day_2022$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._world_food_day_2022$.next(updatedArray);

        // this._world_food_day_2022$.next([...this._world_food_day_2022$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "Saraswathi Puja 2022") {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._saraswathi_puja_2022$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._saraswathi_puja_2022$.next(updatedArray);

        // this._saraswathi_puja_2022$.next([...this._saraswathi_puja_2022$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "friendly_match_bw_acar_and_horticulture_college") {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._friendlyMatchbwAcarandHorticulture$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._friendlyMatchbwAcarandHorticulture$.next(updatedArray);

        // this._friendlyMatchbwAcarandHorticulture$.next([...this._friendlyMatchbwAcarandHorticulture$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "inter_college_tournament_2022-coimbatore") {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._inter_college_tournament_2022_coimbatore$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._inter_college_tournament_2022_coimbatore$.next(updatedArray);

        // this._inter_college_tournament_2022_coimbatore$.next([...this._inter_college_tournament_2022_coimbatore$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "sports_day_2022") {
        const newItem = { url: url, name: itemRef.name.replace(/-/g, ' ') };
        const updatedArray = [...this._sports_day_2022$.value, newItem].sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        this._sports_day_2022$.next(updatedArray);

        // this._sports_day_2022$.next([...this._sports_day_2022$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
    }).catch((error: any) => {
      console.error('Error getting download URL:', error);
    });
  }

  clearImages() {
    this._padhmaSreeAward$.next([]);
    this._tanflorVisit$.next([]);
    this._eductionalAwarness$.next([]);
    this._votersDay$.next([]);
    this._nssDay$.next([]);
    this._dengueAwareness$.next([]);
    this._graduation$.next([]);
    this._aluminiMeet$.next([]);
    this._breedingManagementInCattle$.next([]);
    this._awarenessProgrammeOnHigherEducationforSchoolStudents$.next([]);
    this._exposureVisitToNIFTEMTNAU$.next([]);
    this._PRASettipalli$.next([]);
    this._trainingonIntegratedCropManagement$.next([]);
    this._ERISilkwormTraining2022$.next([]);
    this._GISGuestlecture$.next([]);
    this._saraswathi_puja_2022$.next([]);
    this._world_food_day_2022$.next([]);
    this._pongal$.next([]);
    this._farewell_2022$.next([]);
    this._club_day_and_hostel_day_2022$.next([]);
    this._agriculture_Innovation_Competition$.next([]);
    this._Independence_Day_2022$.next([]);
    this._Parents_Teachers_Meeting_2022$.next([]);
    this._TNAU_Standing_Committee_Visit_2022$.next([]);
    this._Year_Day_Celebration_2021_Batch$.next([]);
    this._Womens_Day_Celebration_2023$.next([]);
    this._freshersDay_2023$.next([]);
    this._muthamizh_Vizha_2023$.next([]);
    this._Administrative_Office_Opening_2023$.next([]);
    this._teachersDaycelb$.next([]);
    this._friendlyMatchbwAcarandHorticulture$.next([]);
    this._inter_college_tournament_2022_coimbatore$.next([]);
    this._sports_day_2022$.next([]);
  }
}

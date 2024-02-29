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
      else if (itemRef.fullPath.split('/')[0] === 'voters-day') {
        this._votersDay$.next([...this._votersDay$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'nss-day') {
        this._nssDay$.next([...this._nssDay$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'dengue-awareness-program') {
        this._dengueAwareness$.next([...this._dengueAwareness$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'graduation-celebration') {
        this._graduation$.next([...this._graduation$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Teachers Day Celebration 2023') {
        this._teachersDaycelb$.next([...this._teachersDaycelb$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'ACAR Administrative Office Opening 2023') {
        this._Administrative_Office_Opening_2023$.next([...this._Administrative_Office_Opening_2023$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Muthamizh Vizha 2023') {
        this._muthamizh_Vizha_2023$.next([...this._muthamizh_Vizha_2023$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Freshers Day 2023') {
        this._freshersDay_2023$.next([...this._freshersDay_2023$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "Women's Day Celebration 2023") {
        this._Womens_Day_Celebration_2023$.next([...this._Womens_Day_Celebration_2023$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "Year Day Celebration - 2021 Batch") {
        this._Year_Day_Celebration_2021_Batch$.next([...this._Year_Day_Celebration_2021_Batch$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "TNAU Standing Committee Visit 2022") {
        this._TNAU_Standing_Committee_Visit_2022$.next([...this._TNAU_Standing_Committee_Visit_2022$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "Parents Teachers Meeting 2022") {
        this._Parents_Teachers_Meeting_2022$.next([...this._Parents_Teachers_Meeting_2022$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "Independence Day 2022") {
        this._Independence_Day_2022$.next([...this._Independence_Day_2022$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "Agriculture Innovation Competition") {
        this._agriculture_Innovation_Competition$.next([...this._agriculture_Innovation_Competition$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "Club Day and Hostel Day 2022") {
        this._club_day_and_hostel_day_2022$.next([...this._club_day_and_hostel_day_2022$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "Farewell 2022") {
        this._farewell_2022$.next([...this._farewell_2022$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "Pongal") {
        this._pongal$.next([...this._pongal$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "World Food Day 2022") {
        this._world_food_day_2022$.next([...this._world_food_day_2022$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "Saraswathi Puja 2022") {
        this._saraswathi_puja_2022$.next([...this._saraswathi_puja_2022$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "friendly_match_bw_acar_and_horticulture_college") {
        this._friendlyMatchbwAcarandHorticulture$.next([...this._friendlyMatchbwAcarandHorticulture$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "inter_college_tournament_2022-coimbatore") {
        this._inter_college_tournament_2022_coimbatore$.next([...this._inter_college_tournament_2022_coimbatore$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === "sports_day_2022") {
        this._sports_day_2022$.next([...this._sports_day_2022$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
    }).catch((error: any) => {
      console.error('Error getting download URL:', error);
    });
  }
}

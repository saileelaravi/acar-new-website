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
  private _graftingAndLayering$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _herbalgarden$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _mistChamber$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _nursery$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _polyhouse$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _FloricultureAndLandscaping$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _nourishingPregnantWomenForFlourishingIndia$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _farmersTrainingProgramme$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _cookingContest$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _worldFoodDay$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _quizCompetition$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _posterDesign$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _extension$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _agriculturalEconomics$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _maths$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _computerScience$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _tamil$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _english$ = new BehaviorSubject<{ url: string; name: string }[]>([]);
  private _agronomy$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]);
  private _agronomy_stats$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]);
  private _agriculture_engn_dept_img$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]);
  private _animal_husbandry_dept_img$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]);
  private _poultry_dept_img$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]);
  private _plant_breeading_dept_img$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]);
  private _hybridizatio_in_bhendi_plant_breeding_dept_img$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]);
  private _breeding_Exposure_Visits_dept_img_dept_img$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]);
  private _seed_science_dept_img$ = new BehaviorSubject<{ url: string; name: string; id: string }[]>([]);







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
  graftingAndLayering$ = this._graftingAndLayering$.asObservable()
  herbalgarden$ = this._herbalgarden$.asObservable()
  mistChamber$ = this._mistChamber$.asObservable()
  nursery$ = this._nursery$.asObservable()
  polyhouse$ = this._polyhouse$.asObservable()
  FloricultureAndLandscaping$ = this._FloricultureAndLandscaping$.asObservable()
  nourishingPregnantWomenForFlourishingIndia$ = this._nourishingPregnantWomenForFlourishingIndia$.asObservable()
  farmersTrainingProgramme$ = this._farmersTrainingProgramme$.asObservable()
  worldFoodDay$ = this._worldFoodDay$.asObservable()
  cookingContest$ = this._cookingContest$.asObservable()
  quizCompetition$ = this._quizCompetition$.asObservable()
  posterDesign$ = this._posterDesign$.asObservable()
  extension$ = this._extension$.asObservable()
  agriculturalEconomics$ = this._agriculturalEconomics$.asObservable()
  maths$ = this._maths$.asObservable()
  computerScience$ = this._computerScience$.asObservable()
  tamil$ = this._tamil$.asObservable()
  english$ = this._english$.asObservable()
  agronomy$ = this._agronomy$.asObservable()
  agronomy_stats$ = this._agronomy_stats$.asObservable()
  agriculture_engn_dept_img$ = this._agriculture_engn_dept_img$.asObservable()
  animal_husbandry_dept_img$ = this._animal_husbandry_dept_img$.asObservable()
  poultry_dept_img$ = this._poultry_dept_img$.asObservable()
  plant_breeading_dept_img$ = this._plant_breeading_dept_img$.asObservable()
  hybridizatio_in_bhendi_plant_breeding_dept_img$ = this._hybridizatio_in_bhendi_plant_breeding_dept_img$.asObservable()
  breeding_Exposure_Visits_dept_img_dept_img$ = this._breeding_Exposure_Visits_dept_img_dept_img$.asObservable()
  seed_science_dept_img$ = this._seed_science_dept_img$.asObservable()








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
      else if (itemRef.fullPath.split('/')[0] === 'grafting-and-layering') {
        this._graftingAndLayering$.next([...this._graftingAndLayering$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'herbalGarden') {
        this._herbalgarden$.next([...this._herbalgarden$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'MistChamber') {
        this._mistChamber$.next([...this._mistChamber$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Nursery') {
        this._nursery$.next([...this._nursery$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Polyhouse') {
        this._polyhouse$.next([...this._polyhouse$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Floriculture-and-Landscaping') {
        this._FloricultureAndLandscaping$.next([...this._FloricultureAndLandscaping$.value, { url: url, name: itemRef.name.replace(/-/g, ' ') }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'nourishing-pregnant-women-for-flourishing-India') {
        this._nourishingPregnantWomenForFlourishingIndia$.next([...this._nourishingPregnantWomenForFlourishingIndia$.value, { url: url, name: itemRef.name.replace(/-/g, ' ').replace("scaled", "") }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'farmers-training-Programme') {
        this._farmersTrainingProgramme$.next([...this._farmersTrainingProgramme$.value, { url: url, name: itemRef.name.replace(/-/g, ' ').replace("scaled", "") }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'World-Food-Day') {
        this._worldFoodDay$.next([...this._worldFoodDay$.value, { url: url, name: itemRef.name.replace(/-/g, ' ').replace("scaled", "") }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Cooking-contest') {
        this._cookingContest$.next([...this._cookingContest$.value, { url: url, name: itemRef.name.replace(/-/g, ' ').replace("scaled", "") }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'quiz-competition') {
        this._quizCompetition$.next([...this._quizCompetition$.value, { url: url, name: itemRef.name.replace(/-/g, ' ').replace("scaled", "") }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'poster-designing') {
        this._posterDesign$.next([...this._posterDesign$.value, { url: url, name: itemRef.name.replace(/.jpg/g, ' ').replace(/-/g, ' ').replace("scaled", "") }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Extension') {
        this._extension$.next([...this._extension$.value, { url: url, name: itemRef.name.replace(/.jpg/g, ' ').replace(/-/g, ' ').replace("scaled", "") }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'AGRICULTURAL ECONOMICS') {
        this._agriculturalEconomics$.next([...this._agriculturalEconomics$.value, { url: url, name: itemRef.name.replace(/.jpg/g, ' ').replace(/-/g, ' ').replace("scaled", "") }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Maths') {
        this._maths$.next([...this._maths$.value, { url: url, name: itemRef.name.replace(/.jpg/g, ' ').replace(/-/g, ' ').replace("scaled", "") }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Computer Science') {
        this._computerScience$.next([...this._computerScience$.value, { url: url, name: itemRef.name.replace(/.jpg/g, ' ').replace(/-/g, ' ').replace("scaled", "") }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'Tamil') {
        this._tamil$.next([...this._tamil$.value, { url: url, name: itemRef.name.replace(/.jpg/g, ' ').replace(/-/g, ' ').replace("scaled", "") }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'English') {
        this._english$.next([...this._english$.value, { url: url, name: itemRef.name.replace(/.jpg/g, ' ').replace(/-/g, ' ').replace("scaled", "") }]);
      }
      else if (itemRef.fullPath.split('/')[0] === 'agronomy_dept_img') {
        const newPlacement = { url: url, name: itemRef.name.replace(/-/g, ' '), id: itemRef.name.split('_')[1].split('.')[0] };
        const updatedPlacements = [...this._agronomy$.value, newPlacement];
        updatedPlacements.sort((a, b) => a.id - b.id);
        this._agronomy$.next(updatedPlacements);
      }
      else if (itemRef.fullPath.split('/')[0] === 'agronomy_stats') {
        const newPlacement = { url: url, name: itemRef.name.replace(/-/g, ' ').replace(/.jpg/g, ' '), id: itemRef.name.split('_')[1].split('.')[0] };
        const updatedPlacements = [...this._agronomy_stats$.value, newPlacement];
        updatedPlacements.sort((a, b) => a.id - b.id);
        this._agronomy_stats$.next(updatedPlacements);
      }
      else if (itemRef.fullPath.split('/')[0] === 'agriculture_engn_dept_img') {
        const newPlacement = { url: url, name: itemRef.name.replace(/-/g, ' ').replace(/.jpg/g, ' '), id: itemRef.name.split('_')[1].split('.')[0] };
        const updatedPlacements = [...this._agriculture_engn_dept_img$.value, newPlacement];
        updatedPlacements.sort((a, b) => a.id - b.id);
        this._agriculture_engn_dept_img$.next(updatedPlacements);
      }
      else if (itemRef.fullPath.split('/')[0] === 'animal_husbandry_dept_img') {
        const newPlacement = { url: url, name: itemRef.name.replace(/.jpg/g, ' '), id: itemRef.name.split('.')[0] };
        const updatedPlacements = [...this._animal_husbandry_dept_img$.value, newPlacement];
        updatedPlacements.sort((a, b) => a.id - b.id);
        this._animal_husbandry_dept_img$.next(updatedPlacements)
      }
      else if (itemRef.fullPath.split('/')[0] === 'poultry_dept_img') {
        const newPlacement = { url: url, name: itemRef.name.replace(/.jpg/g, ' '), id: itemRef.name.split('.')[0] };
        const updatedPlacements = [...this._poultry_dept_img$.value, newPlacement];
        updatedPlacements.sort((a, b) => a.id - b.id);
        this._poultry_dept_img$.next(updatedPlacements)
      }
      else if (itemRef.fullPath.split('/')[0] === 'plant_breeading_dept_img') {
        const newPlacement = { url: url, name: itemRef.name.replace(/.jpg/g, ' ').replace(/-/g, ' '), id: itemRef.name.split('.')[0] };
        const updatedPlacements = [...this._plant_breeading_dept_img$.value, newPlacement];
        updatedPlacements.sort((a, b) => a.id - b.id);
        this._plant_breeading_dept_img$.next(updatedPlacements)
      }
      else if (itemRef.fullPath.split('/')[0] === 'hybridizatio_ in_bhendi_plant_breeding_dept_img') {
        const newPlacement = { url: url, name: itemRef.name.replace(/.jpg/g, ' ').replace(/-/g, ' '), id: itemRef.name.split('.')[0] };
        const updatedPlacements = [...this._hybridizatio_in_bhendi_plant_breeding_dept_img$.value, newPlacement];
        updatedPlacements.sort((a, b) => a.id - b.id);
        this._hybridizatio_in_bhendi_plant_breeding_dept_img$.next(updatedPlacements)
      }
      else if (itemRef.fullPath.split('/')[0] === 'Breeding_Exposure_Visits_dept_img') {
        const newPlacement = { url: url, name: itemRef.name.replace(/.jpg/g, ' ').replace(/-/g, ' '), id: itemRef.name.split('_')[1].split('.')[0] };
        const updatedPlacements = [...this._breeding_Exposure_Visits_dept_img_dept_img$.value, newPlacement];
        updatedPlacements.sort((a, b) => a.id - b.id);
        this._breeding_Exposure_Visits_dept_img_dept_img$.next(updatedPlacements)
      }
      else if (itemRef.fullPath.split('/')[0] === 'seed_science_dept_img') {
        const newPlacement = { url: url, name: itemRef.name.replace(/.jpg/g, ' ').replace(/-/g, ' '), id: itemRef.name.split('_')[1].split('.')[0] };
        const updatedPlacements = [...this._seed_science_dept_img$.value, newPlacement];
        updatedPlacements.sort((a, b) => a.id - b.id);
        this._seed_science_dept_img$.next(updatedPlacements)
      }
    }).catch((error: any) => {
      console.error('Error getting download URL:', error);
    });
  }

}  

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgronomyComponent } from './agronomy/agronomy.component';
import { AgriculturalEngineeringComponent } from './agricultural-engineering/agricultural-engineering.component';
import { AnimalHusbandryComponent } from './animal-husbandry/animal-husbandry.component';
import { PlantBreedingComponent } from './crop-improvment/plant-breeding/plant-breeding.component';
import { CropPhysiologyComponent } from './crop-improvment/crop-physiology/crop-physiology.component';
import { SeedScienceComponent } from './crop-improvment/seed-science/seed-science.component';
import { BioChemistryComponent } from './crop-improvment/bio-chemistry/bio-chemistry.component';
import { AgricultureEntromologyComponent } from './crop-protection/agriculture-entromology/agriculture-entromology.component';
import { PlantPathologyComponent } from './crop-protection/plant-pathology/plant-pathology.component';

const routes: Routes = [
  {path:'agronomy',component:AgronomyComponent},
  {path:'agricultural-engineering',component:AgriculturalEngineeringComponent},
  {path:'animal-husbandry',component:AnimalHusbandryComponent},
  {path:'plant-breeding',component:PlantBreedingComponent},
  {path:'crop-physiology',component:CropPhysiologyComponent},
  {path:'seed-science',component:SeedScienceComponent},
  {path:'bio-chemistry',component:BioChemistryComponent},
  {path:'agriculture-entromology',component:AgricultureEntromologyComponent},
  {path:'plant-pathology',component:PlantPathologyComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }

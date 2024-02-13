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
import { EnvironmentalScienceComponent } from './natural-resource-management/environmental-science/environmental-science.component';
import { MicroBiologyComponent } from './natural-resource-management/micro-biology/micro-biology.component';
import { SoilScienceComponent } from './natural-resource-management/soil-science/soil-science.component';
import { HorticultureComponent } from './horticulture/horticulture.component';
import { FoodScienceNutritionComponent } from './food-science-nutrition/food-science-nutrition.component';
import { AgriculturalEconomicsComponent } from './social-science/agricultural-economics/agricultural-economics.component';
import { ARMComponent } from './social-science/arm/arm.component';
import { ComputerScienceComponent } from './social-science/computer-science/computer-science.component';
import { EnglishComponent } from './social-science/english/english.component';
import { ExtensionComponent } from './social-science/extension/extension.component';
import { MathsComponent } from './social-science/maths/maths.component';
import { TamilComponent } from './social-science/tamil/tamil.component';

const routes: Routes = [
  {path:'agronomy',component:AgronomyComponent},
  {path:'agricultural-engineering',component:AgriculturalEngineeringComponent},
  {path:'animal-husbandry',component:AnimalHusbandryComponent},
  {path:'plant-breeding',component:PlantBreedingComponent},
  {path:'crop-physiology',component:CropPhysiologyComponent},
  {path:'seed-science',component:SeedScienceComponent},
  {path:'bio-chemistry',component:BioChemistryComponent},
  {path:'agriculture-entromology',component:AgricultureEntromologyComponent},
  {path:'plant-pathology',component:PlantPathologyComponent},
  {path:'soil-science',component:SoilScienceComponent},
  {path:'micro-biology',component:MicroBiologyComponent},
  {path:'environmental-science',component:EnvironmentalScienceComponent},
  {path:'horticulture',component:HorticultureComponent},
  {path:'food-science',component:FoodScienceNutritionComponent},
  {path:'extension',component:ExtensionComponent},
  {path:'tamil',component:TamilComponent},
  {path:'english',component:EnglishComponent},
  {path:'maths',component:MathsComponent},
  {path:'arm',component:ARMComponent},
  {path:'computer-science',component:ComputerScienceComponent},
  {path:'agricultural-economics',component:AgriculturalEconomicsComponent},






];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }

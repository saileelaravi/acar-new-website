import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostelComponent } from './hostel/hostel.component';
import { YogaComponent } from './yoga/yoga.component';
import { TrainingsAndEventsComponent } from './events/trainings-and-events/trainings-and-events.component';
import { FunctionsComponent } from './events/functions/functions.component';
import { SportsComponent } from './events/sports/sports.component';
import { LibraryComponent } from './facilities/library/library.component';
import { ItLabComponent } from './facilities/it-lab/it-lab.component';
import { PadhmaSreeAwardComponent } from './events/trainings-and-events/padhma-sree-award/padhma-sree-award.component';
import { TanfloraVisitComponent } from './events/trainings-and-events/tanflora-visit/tanflora-visit.component';
import { EducationalAwarnessComponent } from './events/trainings-and-events/educational-awarness/educational-awarness.component';
import { GISGuestlectureComponent } from './events/trainings-and-events/gisguestlecture/gisguestlecture.component';
import { ERISilkwormTraining2022Component } from './events/trainings-and-events/erisilkworm-training2022/erisilkworm-training2022.component';
import { TrainingOnIntegratedCropManagementComponent } from './events/trainings-and-events/training-on-integrated-crop-management/training-on-integrated-crop-management.component';
import { PRASettipalliComponent } from './events/trainings-and-events/prasettipalli/prasettipalli.component';
import { ExposureVisitToNIFTEMAndTNAUComponent } from './events/trainings-and-events/exposure-visit-to-niftemand-tnau/exposure-visit-to-niftemand-tnau.component';
import { AwarenessProgramOnHigherEducationForSchoolStudentsComponent } from './events/trainings-and-events/awareness-program-on-higher-education-for-school-students/awareness-program-on-higher-education-for-school-students.component';
import { AtamTrainingOnBreeadingManagementInCattelComponent } from './events/trainings-and-events/atam-training-on-breeading-management-in-cattel/atam-training-on-breeading-management-in-cattel.component';
import { AcarAluminMeet2023Component } from './events/trainings-and-events/acar-alumin-meet2023/acar-alumin-meet2023.component';
import { GraduationDay2023Component } from './events/trainings-and-events/graduation-day2023/graduation-day2023.component';
import { DengueAwarenessProgram2023Component } from './events/trainings-and-events/dengue-awareness-program2023/dengue-awareness-program2023.component';
import { NssDayProgram2023Component } from './events/trainings-and-events/nss-day-program2023/nss-day-program2023.component';
import { VotersDayDrawingCompetitionComponent } from './events/trainings-and-events/voters-day-drawing-competition/voters-day-drawing-competition.component';
import { TeachersDaycelebration2023Component } from './events/functions/teachers-daycelebration2023/teachers-daycelebration2023.component';
import { ACARAdministrativeOfficeOpening2023Component } from './events/functions/acaradministrative-office-opening2023/acaradministrative-office-opening2023.component';
import { MuthamizhVizha2023Component } from './events/functions/muthamizh-vizha2023/muthamizh-vizha2023.component';
import { SaraswathiPuja2022Component } from './events/functions/saraswathi-puja-2022/saraswathi-puja-2022.component';
import { WorldFoodDay2022Component } from './events/functions/world-food-day-2022/world-food-day-2022.component';
import { PongalComponent } from './events/functions/pongal/pongal.component';
import { Farewell2022Component } from './events/functions/farewell-2022/farewell-2022.component';
import { ClubDayAndHostelDay2022Component } from './events/functions/club-day-and-hostel-day-2022/club-day-and-hostel-day-2022.component';
import { AgricultureInnovationCompetitionComponent } from './events/functions/agriculture-innovation-competition/agriculture-innovation-competition.component';
import { YearDayCelebration2021BatchComponent } from './events/functions/year-day-celebration-2021-batch/year-day-celebration-2021-batch.component';
import { WomensDayCelebration2023Component } from './events/functions/womens-day-celebration-2023/womens-day-celebration-2023.component';
import { FreshersDay2023Component } from './events/functions/freshers-day-2023/freshers-day-2023.component';
import { IndependenceDay2022Component } from './events/functions/independence-day-2022/independence-day-2022.component';
import { ParentsTeachersMeeting2022Component } from './events/functions/parents-teachers-meeting-2022/parents-teachers-meeting-2022.component';
import { TNAUStandingCommitteeVisit2022Component } from './events/functions/tnaustanding-committee-visit-2022/tnaustanding-committee-visit-2022.component';
import { FriendlyMatchBwACARHorticultureCollegeJeenurComponent } from './events/sports/friendly-match-bw-acarhorticulture-college-jeenur/friendly-match-bw-acarhorticulture-college-jeenur.component';
import { InterCollegiateTournamentCoimbatoreComponent } from './events/sports/inter-collegiate-tournament-coimbatore/inter-collegiate-tournament-coimbatore.component';
import { SportsDayComponent } from './events/sports/sports-day/sports-day.component';

const routes: Routes = [
  { path: 'hostel', component: HostelComponent },
  { path: 'yoga', component: YogaComponent },
  { path: 'trainings-and-events', component: TrainingsAndEventsComponent },
  { path: 'events-1', component: PadhmaSreeAwardComponent },
  { path: 'events-2', component: TanfloraVisitComponent },
  { path: 'events-3', component: EducationalAwarnessComponent },
  { path: 'events-4', component: VotersDayDrawingCompetitionComponent },
  { path: 'events-5', component: NssDayProgram2023Component },
  { path: 'events-6', component: DengueAwarenessProgram2023Component },
  { path: 'events-7', component: GraduationDay2023Component },
  { path: 'events-8', component: AcarAluminMeet2023Component },
  { path: 'events-9', component: AtamTrainingOnBreeadingManagementInCattelComponent },
  { path: 'events-10', component: AwarenessProgramOnHigherEducationForSchoolStudentsComponent },
  { path: 'events-11', component: ExposureVisitToNIFTEMAndTNAUComponent },
  { path: 'events-12', component: PRASettipalliComponent },
  { path: 'events-13', component: TrainingOnIntegratedCropManagementComponent },
  { path: 'events-14', component: ERISilkwormTraining2022Component },
  { path: 'events-15', component: GISGuestlectureComponent },
  { path: 'celeb-1', component: TeachersDaycelebration2023Component },
  { path: 'celeb-2', component: ACARAdministrativeOfficeOpening2023Component },
  { path: 'celeb-3', component: MuthamizhVizha2023Component },
  { path: 'celeb-4', component: FreshersDay2023Component },
  { path: 'celeb-5', component: WomensDayCelebration2023Component },
  { path: 'celeb-6', component: YearDayCelebration2021BatchComponent },
  { path: 'celeb-7', component: TNAUStandingCommitteeVisit2022Component },
  { path: 'celeb-8', component: ParentsTeachersMeeting2022Component },
  { path: 'celeb-9', component: IndependenceDay2022Component },
  { path: 'celeb-10', component: AgricultureInnovationCompetitionComponent },
  { path: 'celeb-11', component: ClubDayAndHostelDay2022Component },
  { path: 'celeb-12', component: Farewell2022Component },
  { path: 'celeb-13', component: PongalComponent },
  { path: 'celeb-14', component: WorldFoodDay2022Component },
  { path: 'celeb-15', component: SaraswathiPuja2022Component },
  { path: 'sports-1', component: FriendlyMatchBwACARHorticultureCollegeJeenurComponent },
  { path: 'sports-2', component: InterCollegiateTournamentCoimbatoreComponent },
  { path: 'sports-3', component: SportsDayComponent },





  { path: 'Functions', component: FunctionsComponent },
  { path: 'Sports', component: SportsComponent },
  { path: 'Library', component: LibraryComponent },
  { path: 'IT-Lab', component: ItLabComponent },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeAtAcarRoutingModule { }

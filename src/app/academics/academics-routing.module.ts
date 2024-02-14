import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseOfferedComponent } from './course-offered/course-offered.component';
import { ExamsComponent } from './academic-cell/exams/exams.component';
import { RulesRegulationsComponent } from './academic-cell/rules-regulations/rules-regulations.component';
import { CertificateCoursesComponent } from './certificate-courses/certificate-courses.component';
import { DisiplinaryComponent } from './committees/disiplinary/disiplinary.component';
import { FinanceComponent } from './committees/finance/finance.component';
import { InnovationCellComponent } from './committees/innovation-cell/innovation-cell.component';
import { IQACComponent } from './committees/iqac/iqac.component';
import { ReservationMonitoringCellComponent } from './committees/reservation-monitoring-cell/reservation-monitoring-cell.component';
import { StudentCounsellingCellComponent } from './committees/student-counselling-cell/student-counselling-cell.component';
import { WASTEDISPOSALComponent } from './committees/waste-disposal/waste-disposal.component';
import { WomendGrievanceCellComponent } from './committees/womend-grievance-cell/womend-grievance-cell.component';
import { NccAndnssComponent } from './ncc-andnss/ncc-andnss.component';
import { NewslettersComponent } from './publications/newsletters/newsletters.component';
import { BooksComponent } from './publications/books/books.component';

const routes: Routes = [
  { path: 'course-offered', component: CourseOfferedComponent },
  { path: 'exams', component: ExamsComponent },
  { path: 'rules-regulations', component: RulesRegulationsComponent },
  { path: 'certificate-courses', component: CertificateCoursesComponent },
  { path: 'disiplinary', component: DisiplinaryComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'innovation-cell', component: InnovationCellComponent },
  { path: 'iqac', component: IQACComponent },
  { path: 'reservation-monitoring-cell', component: ReservationMonitoringCellComponent },
  { path: ':id', component: StudentCounsellingCellComponent },
  { path: 'waste-disposal', component: WASTEDISPOSALComponent },
  { path: 'women-grievance-cell', component: WomendGrievanceCellComponent },
  { path: 'nss-ncc', component: NccAndnssComponent },
  { path: 'newsletters-brouchers', component: NewslettersComponent },
  { path: 'books', component: BooksComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicsRoutingModule { }

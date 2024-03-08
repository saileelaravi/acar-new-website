import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseOfferedComponent } from './course-offered/course-offered.component';
import { ExamsComponent } from './academic-cell/exams/exams.component';
import { RulesRegulationsComponent } from './academic-cell/rules-regulations/rules-regulations.component';
import { CertificateCoursesComponent } from './certificate-courses/certificate-courses.component';
import { NccAndnssComponent } from './ncc-andnss/ncc-andnss.component';
import { NewslettersComponent } from './publications/newsletters/newsletters.component';
import { BooksComponent } from './publications/books/books.component';
import { CommitteesComponent } from './committees/committees/committees.component';

const routes: Routes = [
  { path: 'course-offered', component: CourseOfferedComponent },
  { path: 'course-offered/:id', component: CourseOfferedComponent },

  { path: 'exams', component: ExamsComponent },
  { path: 'rules-regulations', component: RulesRegulationsComponent },
  { path: 'certificate-courses', component: CertificateCoursesComponent },
  { path: 'nss-ncc', component: NccAndnssComponent },
  { path: 'newsletters-brouchers', component: NewslettersComponent },
  { path: 'newsletters-brouchers/:id', component: NewslettersComponent },

  { path: 'books', component: BooksComponent },
  { path: ':id', component: CommitteesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicsRoutingModule { }

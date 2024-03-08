import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  constructor(private route: Router){}

  redirectToCourseOfferedPage(){
    this.route.navigateByUrl('/academics/course-offered/' +'application-form')

  }

}
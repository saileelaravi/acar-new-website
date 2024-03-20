// import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-footer',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 12.767059717119976,
    lng: 77.9055635789145
  };
  zoom = 6;
  currentYear: any;

  constructor(private router:Router) {
    this.currentYear = new Date().getFullYear()
  
    // console.log('currentYear::', this.currentYear.getFullYear());


  }
  redirectToPath(path: string | UrlTree){
    this.router.navigateByUrl(path)
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }


  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-placements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './placements.component.html',
  styleUrl: './placements.component.scss'
})
export class PlacementsComponent {
  placed_students = [
    { url: 'assets/CHANDRU1-150x150 (1).png', title: 'CHANDRU K.  ',position:'Agricultural officer', id:'ID NO 2016042008' },
    { url: 'assets/RAVINDAR-N.-1-150x150.png', title: 'RAVINDAR N.  ',position:'Agricultural officer', id:'ID NO 2016042077' },
    { url: 'assets/SANDEEP-CHOWDRY-J-150x150.png', title: 'SANDEEP CHOWDRY J  ' ,position:'Agricultural officer', id:'ID NO 2016042083'},
    { url: 'assets/VINODH-R-150x150.jpg', title: 'VINODH R  ' ,position:'Agricultural officer', id:'ID NO 2016042110'},

  ]

}

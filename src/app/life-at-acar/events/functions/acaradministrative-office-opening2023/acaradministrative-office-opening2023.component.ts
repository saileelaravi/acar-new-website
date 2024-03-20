import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acaradministrative-office-opening2023',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acaradministrative-office-opening2023.component.html',
  styleUrl: './acaradministrative-office-opening2023.component.scss'
})
export class ACARAdministrativeOfficeOpening2023Component {
  Administrative_Office_OpeningImages: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('ACAR Administrative Office Opening 2023');

  }

  ngOnInit() {
    this.lifeAtAcarService.Administrative_Office_Opening_2023$.subscribe((images: { url: string; name: string; }[]) => {
      this.Administrative_Office_OpeningImages = images;
    });
  }
}

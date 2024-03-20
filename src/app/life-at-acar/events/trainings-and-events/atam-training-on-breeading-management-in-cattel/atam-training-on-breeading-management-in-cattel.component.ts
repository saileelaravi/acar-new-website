import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atam-training-on-breeading-management-in-cattel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atam-training-on-breeading-management-in-cattel.component.html',
  styleUrl: './atam-training-on-breeading-management-in-cattel.component.scss'
})
export class AtamTrainingOnBreeadingManagementInCattelComponent {
  breedingManagementInCattle: { url: string; name: string; }[]=[];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('Breeding Management in Cattle');

  }

  ngOnInit() {
    this.lifeAtAcarService.breedingManagementInCattle$.subscribe((images: { url: string; name: string; }[]) => {
      this.breedingManagementInCattle = images;
    });
  }
}

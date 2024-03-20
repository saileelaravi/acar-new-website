import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-friendly-match-bw-acarhorticulture-college-jeenur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './friendly-match-bw-acarhorticulture-college-jeenur.component.html',
  styleUrl: './friendly-match-bw-acarhorticulture-college-jeenur.component.scss'
})
export class FriendlyMatchBwACARHorticultureCollegeJeenurComponent {
  Images: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('friendly_match_bw_acar_and_horticulture_college');

  }

  ngOnInit() {
    this.lifeAtAcarService.friendlyMatchbwAcarandHorticulture$.subscribe((images: { url: string; name: string; }[]) => {
      this.Images = images;
    });
  }
}

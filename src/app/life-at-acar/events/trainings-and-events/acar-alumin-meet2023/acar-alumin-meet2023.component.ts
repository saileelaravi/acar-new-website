import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acar-alumin-meet2023',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acar-alumin-meet2023.component.html',
  styleUrl: './acar-alumin-meet2023.component.scss'
})
export class AcarAluminMeet2023Component {
  aluminiMeetImages: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('acar-alumini-meet');

  }

  ngOnInit() {
    this.lifeAtAcarService.aluminiMeet$.subscribe((images: { url: string; name: string; }[]) => {
      this.aluminiMeetImages = images;
    });
  }
}

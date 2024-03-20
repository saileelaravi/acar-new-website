import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nss-day-program2023',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nss-day-program2023.component.html',
  styleUrl: './nss-day-program2023.component.scss'
})
export class NssDayProgram2023Component {
  nssDayImages: { url: string; name: string; }[]=[];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('nss-day');

  }

  ngOnInit() {
    this.lifeAtAcarService.nssDay$.subscribe((images: { url: string; name: string; }[]) => {
      this.nssDayImages = images;
    });
  }
}

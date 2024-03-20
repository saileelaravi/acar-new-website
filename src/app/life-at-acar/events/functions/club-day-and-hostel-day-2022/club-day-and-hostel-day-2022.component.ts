import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-club-day-and-hostel-day-2022',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './club-day-and-hostel-day-2022.component.html',
  styleUrl: './club-day-and-hostel-day-2022.component.scss'
})
export class ClubDayAndHostelDay2022Component {
  Images: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage("Club Day and Hostel Day 2022");

  }

  ngOnInit() {
    this.lifeAtAcarService.club_day_and_hostel_day_2022$.subscribe((images: { url: string; name: string; }[]) => {
      this.Images = images;
    });
  }
}

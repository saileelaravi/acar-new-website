import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parents-teachers-meeting-2022',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parents-teachers-meeting-2022.component.html',
  styleUrl: './parents-teachers-meeting-2022.component.scss'
})
export class ParentsTeachersMeeting2022Component {
  Images: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage("Parents Teachers Meeting 2022");

  }

  ngOnInit() {
    this.lifeAtAcarService.Parents_Teachers_Meeting_2022$.subscribe((images: { url: string; name: string; }[]) => {
      this.Images = images;
    });
  }
}

import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teachers-daycelebration2023',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teachers-daycelebration2023.component.html',
  styleUrl: './teachers-daycelebration2023.component.scss'
})
export class TeachersDaycelebration2023Component {
  teachersDaycelbImages: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('Teachers Day Celebration 2023');

  }

  ngOnInit() {
    this.lifeAtAcarService.teachersDaycelb$.subscribe((images: { url: string; name: string; }[]) => {
      this.teachersDaycelbImages = images;
      console.log(images)
    });
  }

}

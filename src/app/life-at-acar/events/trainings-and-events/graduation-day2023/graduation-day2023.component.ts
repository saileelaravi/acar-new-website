import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-graduation-day2023',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graduation-day2023.component.html',
  styleUrl: './graduation-day2023.component.scss'
})
export class GraduationDay2023Component {
  graduationImages: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('graduation-celebration');

  }

  ngOnInit() {
    this.lifeAtAcarService.graduation$.subscribe((images: { url: string; name: string; }[]) => {
      this.graduationImages = images;
    });
  }
}

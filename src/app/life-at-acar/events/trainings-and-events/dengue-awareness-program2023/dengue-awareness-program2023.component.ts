import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dengue-awareness-program2023',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dengue-awareness-program2023.component.html',
  styleUrl: './dengue-awareness-program2023.component.scss'
})
export class DengueAwarenessProgram2023Component {
  dengueAwarenessImages: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('dengue-awareness-program');

  }

  ngOnInit() {
    this.lifeAtAcarService.dengueAwareness$.subscribe((images: { url: string; name: string; }[]) => {
      this.dengueAwarenessImages = images;
    });
  }
}

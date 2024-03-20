import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-muthamizh-vizha2023',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './muthamizh-vizha2023.component.html',
  styleUrl: './muthamizh-vizha2023.component.scss'
})
export class MuthamizhVizha2023Component {
  muthamizh_VizhaImages: { url: string; name: string; }[] = [];

  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('Muthamizh Vizha 2023');
  }

  ngOnInit() {
    this.lifeAtAcarService.muthamizh_Vizha_2023$.subscribe((images: { url: string; name: string; }[]) => {
      this.muthamizh_VizhaImages = images;
    });
  }
}

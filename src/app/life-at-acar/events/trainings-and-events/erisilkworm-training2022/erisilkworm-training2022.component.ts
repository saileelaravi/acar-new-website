import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-erisilkworm-training2022',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './erisilkworm-training2022.component.html',
  styleUrl: './erisilkworm-training2022.component.scss'
})
export class ERISilkwormTraining2022Component {
  ERISilkwormTraining2022Images: { url: string; name: string; }[]=[];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('ERI Silkworm Training 2022');

  }

  ngOnInit() {
    this.lifeAtAcarService.ERISilkwormTraining2022$.subscribe((images: { url: string; name: string; }[]) => {
      this.ERISilkwormTraining2022Images = images;
    });
  }
}

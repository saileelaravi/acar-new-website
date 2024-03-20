import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pongal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pongal.component.html',
  styleUrl: './pongal.component.scss'
})
export class PongalComponent {
  Images: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage("Pongal");

  }

  ngOnInit() {
    this.lifeAtAcarService.pongal$.subscribe((images: { url: string; name: string; }[]) => {
      this.Images = images;
    });
  }
}

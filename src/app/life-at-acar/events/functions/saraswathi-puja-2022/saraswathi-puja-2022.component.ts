import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-saraswathi-puja-2022',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './saraswathi-puja-2022.component.html',
  styleUrl: './saraswathi-puja-2022.component.scss'
})
export class SaraswathiPuja2022Component {
  Images: { url: string; name: string; }[] = [];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage("Saraswathi Puja 2022");
  }

  ngOnInit() {
    this.lifeAtAcarService.saraswathi_puja_2022$.subscribe((images: { url: string; name: string; }[]) => {
      this.Images = images;
    });
  }
}

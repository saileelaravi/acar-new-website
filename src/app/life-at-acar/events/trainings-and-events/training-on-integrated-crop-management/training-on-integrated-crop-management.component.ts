import { Component } from '@angular/core';
import { LifeAtAcarService } from '../../../service/life-at-acar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-training-on-integrated-crop-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './training-on-integrated-crop-management.component.html',
  styleUrl: './training-on-integrated-crop-management.component.scss'
})
export class TrainingOnIntegratedCropManagementComponent {
  trainingonIntegratedCropManagementImages: { url: string; name: string; }[] =[];
  constructor(private lifeAtAcarService: LifeAtAcarService) {
    this.lifeAtAcarService.readFilesFromStorage('Training on Integrated Crop Management');

  }

  ngOnInit() {
    this.lifeAtAcarService.trainingonIntegratedCropManagement$.subscribe((images: { url: string; name: string; }[]) => {
      this.trainingonIntegratedCropManagementImages = images;
    });
  }
}

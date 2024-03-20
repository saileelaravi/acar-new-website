import { Component } from '@angular/core';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-principal-message',
  standalone: true,
  imports: [],
  templateUrl: './principal-message.component.html',
  styleUrl: './principal-message.component.scss'
})
export class PrincipalMessageComponent {
  principalImages: { url: string; name: string; }[] = [];

  constructor(private menuService: MenuService) {
    this.menuService.readFilesFromStorage('teaching_faculty/principal');
    this.menuService.pricipal$.subscribe((images: { url: string; name: string; }[]) => {
      this.principalImages = images
      console.log('principal images', images)

    });
  }
  ngOnDestroy() {
    this.menuService.clearImages();
  }

}

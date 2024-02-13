import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-arm',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './arm.component.html',
  styleUrl: './arm.component.scss'
})
export class ARMComponent {
  dialogVisible: boolean = false;

  showDialog() {
    this.dialogVisible = true;
  }
}

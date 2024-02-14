import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-counselling-cell',
  standalone: true,
  imports: [],
  templateUrl: './student-counselling-cell.component.html',
  styleUrl: './student-counselling-cell.component.scss'
})

export class StudentCounsellingCellComponent {
  pdfUrl$: any; 

  constructor(private router: ActivatedRoute, private storage: AngularFireStorage, private sanitizer: DomSanitizer) {
    
    this.router.params.subscribe((params: any) => {
      this.getPdfUrl(params.id).subscribe((url: any) => {
        this.pdfUrl$ = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        this.readPdfUrl()
      })
    })
  }
  readPdfUrl() {
   this.pdfUrl$;
  }

  getPdfUrl(label: string) {
    let pdfFileName: string;
    pdfFileName = label + '.pdf'
    const storageRef = this.storage.ref(`/committee-documents/${pdfFileName}`);
    return storageRef.getDownloadURL();
  }
}
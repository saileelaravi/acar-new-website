import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AcademicsService } from '../../service/academics.service';

@Component({
  selector: 'app-committees',
  standalone: true,
  imports: [],
  templateUrl: './committees.component.html',
  styleUrl: './committees.component.scss'
})
export class CommitteesComponent {
  pdfUrl$!: SafeResourceUrl;

  constructor(private router: ActivatedRoute, private sanitizer: DomSanitizer,
    private academicService: AcademicsService) {

    this.router.params.subscribe(params => {
      const committeeId = params['id'];
      console.log(committeeId)
      if(committeeId.split('/')[0] == 'committee'){
      this.academicService.getPdfUrl(committeeId.split('/')[1]).subscribe(url => {
        const safeUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        this.pdfUrl$ = safeUrl;
      });
    }
    });
  }
}

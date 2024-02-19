import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { AcademicsService } from '../../service/academics.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newsletters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newsletters.component.html',
  styleUrl: './newsletters.component.scss'
})
export class NewslettersComponent {
  pdfUrl$!: any;
  BrouchersImages: { url: string; name: string; }[] = [];
  newsLetterImages: { url: string; name: string; }[] = [];

  constructor(private sanitizer: DomSanitizer,
    private academicService: AcademicsService,) {

    this.academicService.readFilesFromStorage('certificate-course-oriented-program');
    this.academicService.readFilesFromStorage('newsLettersAndBrouchers');

    this.academicService.newsLettersAndBrouchers$.subscribe((images: { url: string; name: string; }[]) => {
      this.BrouchersImages = images.filter(i =>
        i.name === 'English Brochure.png' || i.name === 'Tamil Brochure.jpg'
      );
      this.newsLetterImages = images.filter(i =>
        i.name != 'English Brochure.png' && i.name != 'Tamil Brochure.jpg'
      );

      // Sort the newsLetterImages based on the year and month encoded in their names
      this.newsLetterImages.sort((a, b) => {
        const matchA = a.name.match(/\d{4}/); // Extract year from the file name
        const matchB = b.name.match(/\d{4}/);
        const yearA = matchA ? parseInt(matchA[0]) : 0; // Parse the year or default to 0 if no match
        const yearB = matchB ? parseInt(matchB[0]) : 0;
        const monthA = this.getMonthNumber(a.name); // Extract month from the file name
        const monthB = this.getMonthNumber(b.name);

        // Compare years first in descending order
        if (yearA < yearB) return 1;
        if (yearA > yearB) return -1;

        // If years are the same, compare months in descending order
        if (monthA < monthB) return 1;
        if (monthA > monthB) return -1;

        return 0; // If years and months are the same, keep the order unchanged
      });


      console.log(this.newsLetterImages)
    });

  }


  // Helper function to get the month number from the month name
  getMonthNumber(name: string): number {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const monthMatch = name.match(/\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\b/g);
    if (monthMatch && monthMatch.length > 0) {
      return monthNames.indexOf(monthMatch[0]) + 1; // Month number is 1-based
    }
    return 0; // If no match found, return 0
  }

  redirectToImagesPdf(imagename: any) {
    console.log('imagename::',imagename)
    let brouched_id: string = '';
    if (imagename == 'English Brochure.png') {
      brouched_id = 'Broucher-Agri-2022-26.11.22-English-op.pdf'
    }
    else if (imagename == 'Tamil Brochure.jpg') {
      brouched_id = 'Broucher-Agri-2022Tamil-2.pdf'
    }
    else if (imagename == 'March 2018.jpg') {
      brouched_id = '1.-News-Letter-January-March-2018-1.pdf'
    }
    else if (imagename == 'June 2018.jpg') {
      brouched_id = 'June-2018.pdf'
    }
    else if (imagename == 'September 2018.jpg') {
      brouched_id = 'Sep-2018.pdf'
    }
    else if (imagename == 'December 2018.jpg') {
      brouched_id = 'December-2018.pdf'
    }
    else if (imagename == 'March 2019.jpg') {
      brouched_id = 'March-2019.pdf'
    }
    else if (imagename == 'June 2019.jpg') {
      brouched_id = 'June-2019-1.pdf'
    }
    else if (imagename == 'September 2019.jpg') {
      brouched_id = 'Sep-2019.pdf'
    }
    else if (imagename == 'December 2019.jpg') {
      brouched_id = 'December-2019.pdf'
    }
    else if (imagename == 'March 2020.jpg') {
      brouched_id = 'March-2020.pdf'
    }
    else if (imagename == 'December 2020.jpg') {
      brouched_id = 'Dec-2020.pdf'
    }
    else if (imagename == 'June 2021.jpg') {
      brouched_id = 'June-2021.pdf'
    }
    else if (imagename == 'December 2021.jpg') {
      brouched_id = 'December-2021.pdf'
    }
    this.academicService.getBroucherPdfUrl(brouched_id).subscribe(url => {
      const safeUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
      window.open(url)
    });
  }
}

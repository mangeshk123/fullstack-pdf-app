
import { Component, OnInit } from '@angular/core';
import { PdfService } from './pdf.service';

@Component({
  selector: 'app-pdf-list',
  standalone: false,
  templateUrl: './pdf-list.component.html'
})
export class PdfListComponent implements OnInit {
  pdfFiles: string[] = [];
  selectedPdfUrl: string | null = null;

  constructor(private pdfService: PdfService) {}

  ngOnInit() {
    this.pdfService.getPdfList().subscribe(files => {
      this.pdfFiles = files;
    });
  }

  openPdf(filename: string) {
    this.selectedPdfUrl = `/pdfs/${filename}`;
    console.log(this.selectedPdfUrl)
  }
}

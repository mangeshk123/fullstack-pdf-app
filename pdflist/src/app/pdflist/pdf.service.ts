
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private API_URL = '/api/pdfs';

  constructor(private http: HttpClient) {}

  getPdfList() {
    return this.http.get<string[]>(this.API_URL);
  }
}

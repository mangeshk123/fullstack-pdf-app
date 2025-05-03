import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { PdfListComponent } from './pdflist/pdf-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: PdfListComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    PdfListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PdfViewerModule,
    RouterModule.forRoot(routes)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

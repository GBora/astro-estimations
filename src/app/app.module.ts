import { ClipboardModule } from 'angular2-clipboard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewEstimationPageComponent } from './new-estimation/new-estimation-page/new-estimation-page.component';
import { AddEstimationPageComponent } from './add-estimation/add-estimation-page/add-estimation-page.component';
import { GetEstimationPageComponent } from './get-estimation/get-estimation-page/get-estimation-page.component';
import { SingleEstimationDetailComponent } from './add-estimation/single-estimation-detail/single-estimation-detail.component';
import { SingleEstimationReportComponent } from './get-estimation/single-estimation-report/single-estimation-report.component';
import { MinMaxEstimationDetailComponent } from './add-estimation/min-max-estimation-detail/min-max-estimation-detail.component';
import { MinMaxEstimationReportComponent } from './get-estimation/min-max-estimation-report/min-max-estimation-report.component';

@NgModule({
  declarations: [
    AppComponent,
    NewEstimationPageComponent,
    AddEstimationPageComponent,
    GetEstimationPageComponent,
    SingleEstimationDetailComponent,
    SingleEstimationReportComponent,
    MinMaxEstimationDetailComponent,
    MinMaxEstimationReportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

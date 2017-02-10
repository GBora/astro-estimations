import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewEstimationPageComponent } from './new-estimation/new-estimation-page/new-estimation-page.component';
import { AddEstimationPageComponent } from './add-estimation/add-estimation-page/add-estimation-page.component';
import { GetEstimationPageComponent } from './get-estimation/get-estimation-page/get-estimation-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NewEstimationPageComponent,
    AddEstimationPageComponent,
    GetEstimationPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

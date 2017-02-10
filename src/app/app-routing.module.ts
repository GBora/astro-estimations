import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewEstimationPageComponent } from './new-estimation/new-estimation-page/new-estimation-page.component';
import { AddEstimationPageComponent } from './add-estimation/add-estimation-page/add-estimation-page.component';
import { GetEstimationPageComponent } from './get-estimation/get-estimation-page/get-estimation-page.component';

const routes: Routes = [
  {
    path: '',
    children: [],
    component: NewEstimationPageComponent
  },
  {
    path: 'add-estimation/:id',
    children: [],
    component: AddEstimationPageComponent
  },
  {
    path: 'get-estimation/:id',
    children: [],
    component: GetEstimationPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

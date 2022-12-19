import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDigimonComponent } from './components/list-digimon/list-digimon.component';
import {SearchDigimonComponent} from './components/search-digimon/search-digimon.component'

const routes: Routes = [

  { path: '', redirectTo: 'searchDigimon', pathMatch: 'full' },
  {path: 'searchDigimon', component: SearchDigimonComponent},
  {path: 'listDigimon', component: ListDigimonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

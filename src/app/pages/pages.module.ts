import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }

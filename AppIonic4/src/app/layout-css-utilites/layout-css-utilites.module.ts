import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LayoutCssUtilitesPage } from './layout-css-utilites.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutCssUtilitesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutCssUtilitesPage]
})
export class LayoutCssUtilitesPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mylist1Page } from './mylist1.page';

const routes: Routes = [
  {
    path: '',
    component: Mylist1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mylist1PageRoutingModule {}

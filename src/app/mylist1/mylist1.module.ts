import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mylist1PageRoutingModule } from './mylist1-routing.module';

import { Mylist1Page } from './mylist1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mylist1PageRoutingModule
  ],
  declarations: [Mylist1Page]
})
export class Mylist1PageModule {}

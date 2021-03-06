import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestPage } from './test';

import { TruckServiceProvider } from '../../providers/truck-service/truck-service';


@NgModule({
  declarations: [
    TestPage,
  ],
  imports: [
    IonicPageModule.forChild(TestPage),
  ],
  providers: [
   TruckServiceProvider,
  ],
})
export class TestPageModule {}

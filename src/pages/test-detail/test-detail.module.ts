import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestDetailPage } from './test-detail';

import { TruckServiceProvider } from '../../providers/truck-service/truck-service';

@NgModule({
  declarations: [
    TestDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TestDetailPage),
  ],
  providers: [
    TruckServiceProvider
  ]
})
export class TestDetailPageModule {}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

import { TruckServiceProvider } from '../../providers/truck-service/truck-service';
import { Truck } from '../../models/truck.model';

/**
 * Generated class for the TestDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-detail',
  templateUrl: 'test-detail.html',
})
export class TestDetailPage {
  tid: string;
  truck: any;
  image: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private truckService: TruckServiceProvider,
    private sanitization:DomSanitizer,
  ) {
    console.log('TestDetailPage constructor = '+ navParams.get('truck'));
    this.truck = navParams.get('truck');
    this.image = this.sanitization.bypassSecurityTrustStyle(`http://localhost:8080/image/${this.truck.timage}`);
    console.log(this.image);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestDetailPage');
  }

}

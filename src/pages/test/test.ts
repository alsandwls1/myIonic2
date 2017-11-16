import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TruckServiceProvider } from '../../providers/truck-service/truck-service';
/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})

export class TestPage {
  private trucks: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public truckService: TruckServiceProvider,

    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
    this.truckService.getTrucks().subscribe(trucks => {
      let json = trucks.text();
      json = JSON.parse(json);
      this.trucks = json;
    });
  }

  openItem(truck: string) {
    console.log('openItem = '+truck);
    this.navCtrl.push('TestDetailPage', {
      truck: truck
    });
  }

}

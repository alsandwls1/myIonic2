import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TestProvider } from '../../providers/test/test';
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
    public testProvider: TestProvider,

    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
    this.testProvider.getTrucks().subscribe(trucks => {
      console.log(trucks);
      console.log(trucks.text());

      let json = trucks.text();
      json = JSON.parse(json);
      this.trucks = json;
    });
  }

}

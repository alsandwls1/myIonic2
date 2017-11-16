import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';

/*
  Generated class for the TruckServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TruckServiceProvider {
  public truckUrl = 'http://localhost:8080/trucks';

  constructor(public http: Http) {}

  getTrucks() : Observable<any> {
    return this.http.get(this.truckUrl);
  }

  getTruckInfo(tid: string): Observable<any> {
    let url = `${this.truckUrl}/${tid}`;
    console.log('url='+url)
    return this.http.get(url)
  }
}

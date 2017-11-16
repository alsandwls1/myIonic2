import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the TestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TestProvider {
  public API = 'http://localhost:8080';
  public TEST_API = this.API + '/trucks';

  constructor(public http: Http) {
    console.log('Hello TestProvider Provider');
  }

  getTrucks() : Observable<any> {
    return this.http.get(this.TEST_API);
  }

}

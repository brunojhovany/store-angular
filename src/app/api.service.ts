import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Products } from './products';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  signin() {}
  signup() {}
  getproducts() {
    return this._http.get('http://www.stuffdevelopers.io:3000/products').map(data => data.json()).toPromise();
  }
}

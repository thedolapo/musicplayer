import { Injectable } from '@angular/core';
// import { HttpClient, HttpResponse} from '@angular/common/http';



// import { Response } from 'selenium-webdriver/http';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl = "../assets/album.json";
 id: number;
  constructor(private _http: Http) {
    // this._albumUrl= "../assets/album.json";
   }

  getAlbum(id: number) {
    
    return this._http.get(this._albumUrl).map((response:Response) => response.json());
  }
}

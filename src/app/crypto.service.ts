import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private url = "https://pro-api.coinmarketcap.com/v1";
  private authToken = 'CMC_PRO_API_KEY=3424f7cf-5400-4e30-9e63-4260900fc842'

  constructor(private http: HttpClient) { }



  public getTable() {
    let myResponse = this.http.get(this.url + '/cryptocurrency/listings/latest?' + this.authToken)
    console.log(myResponse)
    return myResponse;

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoServices {
  private apiurl = 'https://localhost:7008/Venta';
  constructor(private http: HttpClient) { }

  
  CreateVenta(body: any): Observable<any> {
    console.log(body,"soy el body");
    return this.http.post<any>(this.apiurl, body);
  }

}

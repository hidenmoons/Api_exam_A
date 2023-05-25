import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private apiurl = 'https://localhost:7008/Tienda';
  constructor(private http: HttpClient) { }

  
  CreateTienda(body: any): Observable<any> {
    return this.http.post<any>(this.apiurl, body);
  }

  GetTiendas(){
    const url = `${this.apiurl}`;
    return this.http.get<any>(url);
  }

  GetTiendaid(id:any) {

    const url = `${this.apiurl}/${id}`;
  
    
    return this.http.get(url);
  }
  UpdateTienda(id:any,tienda: any):Observable<any>
  {
    const url = `${this.apiurl}/${id}`;
   
    return this.http.put<any>(url,tienda);

  }
  DeleteTienda(id:any):Observable<any>
  {
    const url = `${this.apiurl}/${id}`;
    
    return this.http.delete<any>(url);

  }
}

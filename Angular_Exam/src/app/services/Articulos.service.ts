import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private apiurl = 'https://localhost:7008/Articulo';
  constructor(private http: HttpClient) { }
  
  
  create(body: any): Observable<any> {
    console.log(body);
    const url = `${this.apiurl}`;
    console.log(url);
    return this.http.post<any>(url, body);
  }

  UpdateTienda(id:any, art: any):Observable<any>
  {
    const url = `${this.apiurl}/${id}`;
    
    return this.http.put<any>(url,art);

  }

  GetArt(): Observable<any[]> {
    const url = `${this.apiurl}`;
    console.log(this.apiurl);
    return this.http.get<any[]>(url);

  }
  DeleteArt(id: any): Observable<any> 
  {
    const url = `${this.apiurl}/${id}`;
    console.log("soy un id de delete" + this.apiurl+'/'+id);
    return this.http.delete<any>(url);
  }
}
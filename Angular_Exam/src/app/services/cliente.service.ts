import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiurl = 'https://localhost:7008/Cliente';
  constructor(private http: HttpClient) { }

  
  create(body: any): Observable<any> {
    return this.http.post<any>(this.apiurl, body);
  }

  
  login(nombre:any, correo:any){

    const url = `${this.apiurl}/${nombre}/${correo}`;
    return this.http.get<any>(url);
  }
  islogin()
  {
     let client = localStorage.getItem('cliente');
     return !(client === null ||client === undefined);
  }
  
  GetClient() {
    console.log(this.apiurl);
    return this.http.get(this.apiurl);
  }

  updateClient(clientid:any,cliente:any):Observable<any>
  {
    const url = `${this.apiurl}/${clientid}`;
    return this.http.put<any>(url,cliente)
  }

  DeleteClient(id:any):Observable<any>
  {
    const url = `${this.apiurl}/${id}`;
    return this.http.delete(url);
  }
}

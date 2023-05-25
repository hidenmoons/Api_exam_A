import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ImgModel } from "../models/Img.model";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
  })
  export class ImgurService {
    rutaImagen: string = '';
    imageURL: SafeUrl | undefined;
  
    constructor(private http: HttpClient,private sanitizer: DomSanitizer) { }
  
    onUploadImage(event: any):Observable<any> {
      const file = event.target.files[0];
    
      const formData = new FormData();
      formData.append('imagen', file);
    
       return this.http.post<any>('https://localhost:7008/img/upload', formData)

      
    }
}
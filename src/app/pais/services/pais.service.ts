import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private countrieUrl:string= environment.Url
  
  constructor(private http:HttpClient) { }

 buscarPais(palabra:string):Observable<any>{
   const url = `${this.countrieUrl}/name/${palabra}`
   return this.http.get(url);
  }
}

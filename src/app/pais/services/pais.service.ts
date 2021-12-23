import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '@pais/interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private countrieUrl:string= environment.Url
  
  constructor(private http:HttpClient) { }

 buscarPais(palabra:string):Observable<Country[]>{
   const url = `${this.countrieUrl}/name/${palabra}`
   return this.http.get<Country[]>(url);
  }
  buscarCapital(palabra:string):Observable<Country[]>{
    const url = `${this.countrieUrl}/capital/${palabra}`
    return this.http.get<Country[]>(url);
  }
  getPaisCode(id:string):Observable<Country>{
    const url = `${this.countrieUrl}/alpha/${id}`
    return this.http.get<Country>(url);
  }
}

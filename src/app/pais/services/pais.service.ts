import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '@pais/interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private countrieUrl:string= environment.Url

  get httpParams(){
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population')
  }
  
  constructor(private http:HttpClient) { }

 buscarPais(palabra:string):Observable<Country[]>{
   const url = `${this.countrieUrl}/name/${palabra}`
   return this.http.get<Country[]>(url,{params:this.httpParams});
  }
  buscarCapital(palabra:string):Observable<Country[]>{
    const url = `${this.countrieUrl}/capital/${palabra}`
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }
  buscarRegion(region:string):Observable<Country[]>{
    const url = `${this.countrieUrl}/region/${region}`
    return this.http.get<Country[]>(url, {params:this.httpParams})
    .pipe(
      tap(console.log)
    );
  }
  getPaisCode(id:string):Observable<Country>{
    const url = `${this.countrieUrl}/alpha/${id}`
    return this.http.get<Country>(url);
  }
}

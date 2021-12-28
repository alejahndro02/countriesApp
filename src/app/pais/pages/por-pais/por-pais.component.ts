import { Component } from '@angular/core';
import { Country } from '@pais/interfaces/pais.interface';
import { PaisService } from '@services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li{
      cursor:pointer;
    }`
  ]
})
export class PorPaisComponent  {
  palabra:string = '';
  hayError:boolean= false
  paises:Country[]= []
  paisesSugeridos:Country[]= [];
  mostrarSugerencia=false

  constructor(private paisService: PaisService) { }

  buscar(palabra:string){
    this.hayError= false;
    this.palabra = palabra
    this.paisService.buscarPais(palabra)
    .subscribe((paises) =>{
      this.paises= [...paises]
    }, (err)=>{
      this.hayError=true
      this.paises=[]
    });
  }
  sugerencias(palabra:string){
    this.hayError = false
    this.palabra = palabra
    this.mostrarSugerencia = true

    //obtiene los datos que coiciden desde la api atraves del servicio 
    this.paisService.buscarPais(palabra)
    .subscribe(paises =>{
      this.paisesSugeridos= paises.slice(0,5)
    },(err)=>{
      this.paisesSugeridos=[]
    })
  }

  buscarSugerencia(palabra:string){
    this.buscar(palabra);
  }
}

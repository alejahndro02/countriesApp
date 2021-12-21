import { Component } from '@angular/core';
import { Country } from '@pais/interfaces/pais.interface';
import { PaisService } from '@services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {
  palabra:string = '';
  hayError:boolean= false
  paises:Country[]= []

  constructor(private paiservice: PaisService) { }

  buscar(){
    this.hayError= false
    this.paiservice.buscarPais(this.palabra)
    .subscribe((paises) =>{
      this.paises= [...paises]
    }, (err)=>{
      this.hayError=true
      this.paises=[]
    });
  }
}

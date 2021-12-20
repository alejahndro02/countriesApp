import { Component } from '@angular/core';
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

  constructor(private paiservice: PaisService) { }

  buscar(){
    this.hayError= false
    console.log(this.palabra);
    this.paiservice.buscarPais(this.palabra)
    .subscribe((paises) =>{
      console.log(paises);
      
    }, (err)=>{
      this.hayError=true
      console.log(err);
    });
  }
}

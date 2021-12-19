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

  constructor(private paiservice: PaisService) { }

  buscar(){
    console.log(this.palabra);
    this.paiservice.buscarPais(this.palabra)
    .subscribe(res =>{
      console.log(res);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Country } from '@pais/interfaces/pais.interface';
import { PaisService } from '@pais/services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent implements OnInit {
  palabra:string = '';
  hayError:boolean= false
  paises:Country[]= [];

  constructor(private paiservice: PaisService) { }


  ngOnInit(): void {
  }
  buscar(palabra:string){
    this.hayError= false;
    this.palabra = palabra
    this.paiservice.buscarCapital(palabra)
    .subscribe((paises) =>{
      this.paises= [...paises]
    }, (err)=>{
      this.hayError=true
      this.paises=[]
    });
  }
}

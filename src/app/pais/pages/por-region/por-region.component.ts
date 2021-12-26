import { Component, OnInit } from '@angular/core';
import { PaisService } from '@services/pais.service';
import { Country } from '@interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {
  regiones: string[]= ['Africa','America', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string='';
  paisesRegion: Country[]= [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }
  getClassCss(region:string):string{
    return (region === this.regionActiva) ? 'btn btn-primary ms-2' : 'btn btn-outline-primary ms-2'
  }

  regionActive(region:string){
    if (region === this.regionActiva){return}
    this.regionActiva= region
    this.paisesRegion= []
    this.buscarRegion(region)
  }

  buscarRegion(region:string){
    this.paisService.buscarRegion(region)
    .subscribe((paises)=>{
      this.paisesRegion = [...paises]
    })
  }
}

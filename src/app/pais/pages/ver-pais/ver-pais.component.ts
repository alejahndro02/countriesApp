import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '@pais/interfaces/pais.interface';
import { PaisService } from '@pais/services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  constructor(private activateRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap(({ id })=> this.paisService.getPaisCode( id )), 
      // switchMap(( param )=> this.paisService.getPaisCode( param.id )), 

      tap(console.log)
    )
    .subscribe( pais => this.pais = pais[0])

  }

}

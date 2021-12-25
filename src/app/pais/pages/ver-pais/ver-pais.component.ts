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
  badges:string[]=[];
  translationslanguages!: string[];

  constructor(private activateRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      switchMap(({ id })=> this.paisService.getPaisCode( id )),
      tap(console.log)
    )
    .subscribe( pais => {
      this.pais = pais[0];
      this.iterarBadgesKey();
      // this.trasnslationLanguage();
    });
  };
iterarBadgesKey(){
      this.translationslanguages = Object.keys( this.pais.translations )
      console.log('nenanena', this.translationslanguages);
};
trasnslationLanguage(){
  const {translations} = this.pais;
  const element = Object.values(translations);
        for( let i =0; i < element.length; i++){
        this.badges.push(element[i].common);
      };
};
}

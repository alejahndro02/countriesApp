import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '@pais/services/pais.service';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id}) =>{
      console.log(id);
      this.paisService.getPaisCode(id).subscribe(pais=>{
        console.log(pais)
      })
    })
  }

}

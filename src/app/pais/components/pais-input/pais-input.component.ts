import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent  {
@Output() onEnter: EventEmitter<string> = new EventEmitter()
  palabra:string=''
buscar(){
  console.log('pabra', this.palabra);
  this.onEnter.emit(this.palabra)
}
}

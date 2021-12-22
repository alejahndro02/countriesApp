import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';



@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})

export class PaisInputComponent implements OnInit  {

@Output() onEnter: EventEmitter<string> = new EventEmitter();
//este evento se ejecuta cuando dejamos de teclear 
@Output() onDebounce: EventEmitter<string> = new EventEmitter();

//se crea un observable tipo Subject
debouncer: Subject<string> = new Subject();

palabra:string=''

ngOnInit() {

  this.debouncer.pipe(debounceTime(300)).subscribe(valor=>{
    console.log('debouncer', valor);
    this.onDebounce.emit(valor)
    
  })
}

buscar(){
  console.log('palabra', this.palabra);
  this.onEnter.emit(this.palabra)

}
teclaPrecionada(){
  this.debouncer.next(this.palabra)
}

}

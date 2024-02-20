import { Component } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent {

  title : string = "Esta es la página de pruebas";
  inputValue : string = "";
  valor: number = 0;

  cambiarTitulo(inputValue:string){
    if(inputValue.trim() != ""){
      this.title=inputValue;
    }
  }

  incrementarContador() {
    this.valor++;
  }

  decrementarContador() {
    if (this.valor > 0) {
      this.valor--;
    }
  }

}

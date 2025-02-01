import { Component } from '@angular/core';

@Component({
  selector: 'app-miprimercomponente',
  templateUrl: './miprimercomponente.component.html',
  styles: ``
})
export class MiprimercomponenteComponent {
  nombre: string = '';
  clic() {
    console.info('Clic de evento en angular')
  }
  mouseMoveEvent() {
    console.log('el mouse paso por aqui')
  }

  imprimirvalor(){
    console.log('la variable: ${this.nombre}')
  }
}

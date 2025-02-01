import { Component, EventEmitter, Output } from '@angular/core';
import { loginInterface } from '../../interface/login.interface';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styles: ``
})
export class EjemploComponent {
  @Output() switchEvent = new EventEmitter<any>();

  placeholdercontrasenia: string = "Ingresa tu contraseña";

  objetoLogin: loginInterface = {
    user: '',
    password: '',
    logged: false
  }

  loginProces() {
    console.log(JSON.stringify(this.objetoLogin));
  }

  clicEventEmitter(){    
    this.switchEvent.emit();
  }
}

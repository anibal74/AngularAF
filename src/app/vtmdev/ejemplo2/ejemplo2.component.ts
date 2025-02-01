import { Component, Output ,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupI } from '../../interface/signup.interface';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrl: './ejemplo2.component.css',    
  standalone: true,  
  imports: [FormsModule],
})
export class Ejemplo2Component {
  @Output() switchEvent = new EventEmitter<any>();
  
  firstInputpassword: string = '';
  confirmInputpassword: string = '';
  
  signupobject: SignupI = {
    firstname: '',
    lastname: '',
    email: '',
    birthdate: '',
    password: ''
  }

  clicEventEmmitter(){
    this.switchEvent.emit();
  }
}

import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DeviceI } from '../../../interface/device.interface';

@Component({
  selector: 'app-crud-button',
  templateUrl: './crud-button.component.html',
  styles: ``
})
export class CrudButtonComponent implements AfterViewInit, OnInit {

  
    name:string = '';
    quantity: number = 0;
  
  ngOnInit(): void {
    this.name = this.device.name;
    this.quantity = this.device.quantity;
  }

  ngAfterViewInit(): void {
    // this.deviceUpdate = this.device;
  }
  // atributos - parametros de entrada de 
  // personalizacion del componente

  // color del boton
  @Input()
  styleButton: string = 'secondary'; // valor por default: secondary (gris)

  // icono del boton
  @Input()
  iconButton: string = 'edit'; // valor por default: edit (lapiz)

  // texto del boton
  @Input()
  labelButton: string = 'Actualizar'; // valor por default: Actualizar

  // atributos - parametros de configuracion
  // del componentes
  
  // estatus del boton (desactivado)
  @Input()
  disabled: boolean = false;

  // mostrar boton
  @Input()
  showButton: boolean = true;

  // información de entrada 
  @Input()
  device: DeviceI = {
    id: 0,
    name: '',
    quantity: 0
  }

  // EVENTOS DE SALIDA

  @Output() clickEvent = new EventEmitter();

  @Output() clickSave = new EventEmitter<DeviceI>();

  clickEventUpdate() {
    this.clickEvent.emit();
  }

  clickEventSave () {
    let deviceUpdate: DeviceI = {
      id: this.device.id,
      name: this.name,
      quantity: this.quantity
    }
    this.clickSave.emit(deviceUpdate);
  }

}
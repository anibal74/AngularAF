import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-button',
  templateUrl: './table-button.component.html',
  styles: ``
})
export class TableButtonComponent {
  @Input()
  labelUpdate:string = 'Update';

  @Input()
  labelDelete:string = 'Delete';

  @Input()
  labelAditional:string = 'Option';

  @Input()
  showUpdate:boolean = true;

  @Input()
  showDelete:Boolean = true;

  @Input()
  showOption:boolean = true;  

  @Input()
  styleButtonUpdate:string = "primary";  

  @Input()
  styleButtonDelte:string = "danger";  

  @Input()
  styleButtonOption:string = "opcion";  

  @Output() eventUpdate = new EventEmitter();

  @Output() eventDelete = new EventEmitter();

  @Output() eventOption = new EventEmitter();

  clicEventUpdate(){
    this.eventUpdate.emit();
  }

  clicEventDelete(){
    this.eventDelete.emit();
  }

  clicEventOption(){
    this.eventOption.emit();
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  pickedComponent:any;
  @Output() componentPicked= new EventEmitter<number>();

  @Input() names: Array<string> = ["Paladine", "Takhisis", "Lunitari"];

  
  public showComponent(i:number){
    this.componentPicked.emit(i);
  }
}
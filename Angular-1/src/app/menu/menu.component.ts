import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  toDisplay = false;
  toDisplay2=false;
  toDisplay3=false;
  toggleData() {
    this.toDisplay = !this.toDisplay;
      this.toDisplay2=false;
      this.toDisplay3=false;

  }
  toggleData2() {
    this.toDisplay2 = !this.toDisplay2;
    this.toDisplay=false;
    this.toDisplay3=false;
  }
  toggleData3() {
    this.toDisplay3 = !this.toDisplay3;
    this.toDisplay2=false;
    this.toDisplay=false;
  }
 }

import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { ValueFromArray } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  
  index=0;
  
  selectedContent(val:any){
    this.index=val;
  }
}

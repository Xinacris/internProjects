import { Component, OnInit, Input, Output } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ContentsComponent } from '../contents/contents.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  @Input() contentSelected: any;
  index=0;
  
  selectedContent(val:any){
    this.index=val;
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ContentsComponent } from '../contents/contents.component';
import { TitleStrategy } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  t: any;

  message: any
  constructor() { }

  @Input() contentSelected: any;
  @Input() popupShow: any;
  index = 0;
  selectedContent(val: any) {
    this.index = val;
  }
  ngOnInit(): void {
  }
  public show($event: any) {
    this.popupShow = true;
  }
  receiveMessage($event: any) {
    this.popupShow = $event
  }
}

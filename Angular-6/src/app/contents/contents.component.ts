import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  constructor() { }
  @Input() contentSelected: any;
  
  ngOnInit(): void {
  }
}
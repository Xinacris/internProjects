import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  public posts:any = [];

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
     this.http.get("https://api.github.com/users/xinacris").subscribe(res=>{
     this.posts.push(res)
     console.log(this.posts)
    },err=>{
      console.log(err)
     });

  }
}

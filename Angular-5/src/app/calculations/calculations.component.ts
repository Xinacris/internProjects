import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {
  array = [
    {
      id: 1,
      product_name: "telefon",
      product_price: 25,
      product_quantity: 200
    }, {
      id: 2,
      product_name: "bilgisayar",
      product_price: 100,
      product_quantity: 20
    }, {
      id: 3,
      product_name: "kulaklık",
      product_price: 75,
      product_quantity: 3
    }, {
      id: 4,
      product_name: "yüzük",
      product_price: 5,
      product_quantity: 2000
    }, {
      id: 5,
      product_name: "kolye",
      product_price: 10,
      product_quantity: 400
    }, {
      id: 6,
      product_name: "bardak",
      product_price: 2,
      product_quantity: 20000
    }
  ]
  constructor() {

  }

  ngOnInit(): void {
  }

}

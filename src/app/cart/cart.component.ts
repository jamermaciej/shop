import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  totalCost: number;

  products = [
    { 'name': 'Cheese', 'price' : 2.50, 'amount' : 1, 'Location': 'Refrigerated foods'},
    { 'name': 'Crisps', 'price' : 3, 'amount' : 1, 'Location': 'the Snack isle'},
    { 'name': 'Pizza', 'price' : 4, 'amount' : 2, 'Location': 'Refrigerated foods'},
    { 'name': 'Chocolate', 'price' : 1.50, 'amount' : 1, 'Location': 'the Snack isle'},
    { 'name': 'Self-raising flour', 'price' : 1.50, 'amount' : 2, 'Location': 'Home baking'},
    { 'name': 'Ground almonds', 'price' : 3, 'amount' : 1, 'Location': 'Home baking'}
  ];

  displayedColumns: string[] = ['name', 'price', 'amount'];
  dataSource = this.products;

  ngOnInit() {
    this.countTotal();
  }

  countTotal() {
    this.totalCost = this.products
    .map( product => product.price )
    .reduce( (prev, next) => prev + next );
  }
}

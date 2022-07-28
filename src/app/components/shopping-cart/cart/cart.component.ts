import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    {id:1, productId: 1, productName:'Xbox Series X', qty: 1, price: 499.99},
    {id:2, productId: 2, productName:'Xbox Series S', qty: 1, price: 249.99},
    {id:3, productId: 3, productName:'Xbox Elite Controller', qty: 1, price: 179.99},
    {id:4, productId: 4, productName:'PlayStation 5', qty: 1, price: 499.99},
    {id:5, productId: 5, productName:'Nintendo Switch OLED', qty: 1, price: 349.99},
    {id:6, productId: 6, productName:'Nintendo Switch Lite', qty: 1, price: 199.99},

  ];

  cartTotal = 0


  constructor() { }

  ngOnInit(): void {
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}

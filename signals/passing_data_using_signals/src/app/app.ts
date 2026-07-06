import { Component, signal } from '@angular/core';
import { ProductCard } from "./product-card/product-card";

@Component({
  selector: 'app-root',
  imports: [ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


  productName = signal('Demo product');
  productPrice = signal(99);
  productAvailable = signal(true);

  updateProduct(){
    this.productName.set(`Product ${Math.floor(Math.random() * 100)}`);
    this.productPrice.set(Math.floor(Math.random() * 500) + 50)
  }

  toggleAvailability(){
    this.productAvailable.set(!this.productAvailable());

  }



}

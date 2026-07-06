import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartStore } from './cart-store/cart-store';
import { CartDisplay } from "./cart-display/cart-display";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CartDisplay],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  cartStore = inject(CartStore);

}

import { Component, inject } from '@angular/core';
import { CartStore } from '../cart-store/cart-store';
import { CartItem } from '../cart-types/cart-types';

@Component({
  selector: 'cart-display',
  imports: [],
  templateUrl: './cart-display.html',
  styleUrl: './cart-display.css',
})
export class CartDisplay {
  cartStore = inject(CartStore);

  addLaptop() {
    this.cartStore.addItem('1', 'Laptop', 999);
  }

  addMouse(){
    this.cartStore.addItem('2', 'Mouse', 25);
  }

  addKeyboard(){
    this.cartStore.addItem('3', 'Keyboard', 79);
  }

  increaseQuantity(id: string){
    const items = this.cartStore.cartItems();
    const currentItem = items.find((item: CartItem) => item.id === id);
    if(currentItem){
      this.cartStore.updateQuantity(id, currentItem.quantity + 1)
    }
  }

  decreaseQuantity(id: string){
    const items = this.cartStore.cartItems();
    const currentItem = items.find((item: CartItem) => item.id === id);
    if(currentItem && currentItem.quantity > 1){
      this.cartStore.updateQuantity(id, currentItem.quantity - 1);
    }
  }

  removeItem(id: string){
    this.cartStore.removeItem(id);
  }

  clearCart(){
    this.cartStore.clearCart();
  }



}

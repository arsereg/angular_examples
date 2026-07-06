import { Component, input, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard{

  name = input.required<string>();
  price = input.required<number>();
  available = input<boolean>(true);

}

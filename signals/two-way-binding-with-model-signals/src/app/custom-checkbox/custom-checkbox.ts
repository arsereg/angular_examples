import { Component, input, model, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-custom-checkbox',
  imports: [],
  templateUrl: './custom-checkbox.html',
  styleUrl: './custom-checkbox.css',
})
export class CustomCheckbox {

  // Este es el que se va a utilizar para el Two-way binding
  checked = model.required<boolean>();

  // Entrada opcional para el label
  label = input<string>('');

  toggle(){
    this.checked.set(!this.checked());
  }

}

import { Component, model } from '@angular/core';
import { CustomCheckbox } from "./custom-checkbox/custom-checkbox";

@Component({
  selector: 'app-root',
  imports: [CustomCheckbox],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  agreedToTerms = model(false);
  enableNotifications = model(true);

  toggleTermsFromParent(){
    this.agreedToTerms.set(!this.agreedToTerms());
  }

  resetAll(){
    this.agreedToTerms.set(false);
    this.enableNotifications.set(false);

  }



}

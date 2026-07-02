import {Component} from '@angular/core';
import {Home} from './home/home'
import {RouterLink, RouterOutlet} from '@angular/router'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: 'app.html',
  styleUrls: ['./app.css'],
})
export class App {
  title = 'homes';
}

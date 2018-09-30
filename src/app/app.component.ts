import { Component } from '@angular/core';
import {CarService} from './services/car-service';
import {Logger} from './services/app-logger-util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CarService, Logger]
})
export class AppComponent {
  title = 'app-training';
}

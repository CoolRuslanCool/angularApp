import { Component } from '@angular/core';
import {CarService} from './services/car-service';
import {Logger} from './services/app-logger-util';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CarService, Logger]
})
export class AppComponent {
  title = 'app-training';

  constructor(private router: Router, private route: ActivatedRoute) {}

  openPage1() {
    this.router.navigate(['/page1']);
    // this.router.navigate(['page1'], {relativeTo: this.route});
  }
}

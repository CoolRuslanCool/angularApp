import { Component, OnInit } from '@angular/core';
import {LoginUserService} from '../services/login-user.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private logService: LoginUserService) { }

  ngOnInit() {
  }

  changeStatus(status: string) {
    if (status === 'login') {
      this.logService.login();
    } else {
      this.logService.logout();
    }
  }

}

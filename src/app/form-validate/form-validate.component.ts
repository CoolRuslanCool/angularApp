import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Logger} from '../services/app-logger-util';

@Component({
  selector: 'app-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.css']
})
export class FormValidateComponent implements OnInit {

  constructor(private logger: Logger) { }

  ngOnInit() {
  }

  validateForm(form: NgForm) {
    this.logger.log(form);
  }

}

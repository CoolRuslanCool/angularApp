import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {Logger} from '../services/app-logger-util';

@Component({
  selector: 'app-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.css']
})
export class FormValidateComponent implements OnInit {

  submitted = false;
  @ViewChild('form')
  form: NgForm;
  data = {};

  @ViewChild('email')
  email: FormControl;

  defEmail = 'def';

  constructor(private logger: Logger) { }

  ngOnInit() {
  }

  validateForm(form: NgForm) {
    const {value, valid} = form;
  // validateForm(form: NgForm) {
  //   this.logger.log(value);
  //   this.logger.log(valid);

    this.logger.log(this.email);
    this.logger.log(form);
    this.data = this.form.value.user;
    this.submitted = true;

  }

}

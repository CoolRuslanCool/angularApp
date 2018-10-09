import { Component, OnInit } from '@angular/core';
import {Logger} from '../services/app-logger-util';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validate',
  templateUrl: './reactive-form-validate.component.html',
  styleUrls: ['./reactive-form-validate.component.css']
})
export class ReactiveFormValidateComponent implements OnInit {

  form: FormGroup;

  constructor(private logger: Logger) {}

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.email, Validators.required, this.lengthValidator], this.asyncValidator),
        password: new FormControl('')
      }),
      checkbox: new FormControl(false)
    });
  }

  onSubmit() {
    const { user, checkbox } = this.form.value;
    this.logger.log(this.form.get('user.email'));
    this.logger.log(user);
    this.logger.log(checkbox
    );
  }

  lengthValidator(email: FormControl) {
    if (email.value.length < 5) {
      return {
        'lengthError': true
      };
    }
    return null;
  }

  asyncValidator(email: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email.value === 'test@email') {
          resolve({
            emailIsUsed: true
          });
        } else {
          return resolve(null);
        }
      }, 3000);
    });
  }

}

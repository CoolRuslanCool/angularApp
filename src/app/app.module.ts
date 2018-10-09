import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { MyComponent } from './my.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { TextColorDirective } from './directives/text-color.directive';
import { AddTextPipe } from './services/add-text.pipe';
import { CarFilterPipe } from './car-filter.pipe';
import { CarShopComponent } from './car-shop/car-shop.component';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';
import {Logger} from './services/app-logger-util';
import { FormValidateComponent } from './form-validate/form-validate.component';
import { ReactiveFormValidateComponent } from './reactive-form-validate/reactive-form-validate.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    CarComponent,
    CarsComponent,
    AddCarComponent,
    TextColorDirective,
    AddTextPipe,
    CarFilterPipe,
    CarShopComponent,
    AddNewCarComponent,
    FormValidateComponent,
    ReactiveFormValidateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot()
  ],
  providers: [
    Logger
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
